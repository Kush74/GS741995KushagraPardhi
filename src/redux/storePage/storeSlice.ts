import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface StoreData {
  s_no: number;
  id: string;
  label: string;
  city: string;
  state: string;
}

interface StoreDataState {
  data: { rowData: StoreData[] };
  loading: boolean;
  error: string | null;
}

const initialState: StoreDataState = {
  data: { rowData: [] },
  loading: false,
  error: null,
};

export const fetchStoreData = createAsyncThunk(
  "store/fetchStoreData",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    try {
      const promises = [
        fetch("/mock-DB/stores-data/stores.json").then((res) => res.json()),
      ];

      let [storesData] = await Promise.all(promises);

      const rowData: StoreData[] = storesData.map(
        (item: any): StoreData => ({
          s_no: item["Seq No."],
          id: item["ID"],
          label: item["Label"],
          city: item["City"],
          state: item["State"],
        })
      );

      return { rowData };
    } catch (error) {
      throw new Error("Failed to fetch Store Data");
    }
  }
);

const storeSlice = createSlice({
  name: "planning",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStoreData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchStoreData.fulfilled,
        (state, action: PayloadAction<{ rowData: StoreData[] }>) => {
          state.loading = false;
          state.data = action.payload;
          // console.log("fetchStoreData.fulfilled", state.data);
        }
      )
      .addCase(fetchStoreData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch Store Data";
      });
  },
});

export default storeSlice.reducer;
