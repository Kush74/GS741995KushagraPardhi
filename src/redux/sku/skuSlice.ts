import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface ProductData {
  id: string;
  label: string;
  class: string;
  department: string;
  price: string;
  cost: string;
}

interface SkuDataState {
  data: { rowData: ProductData[] };
  loading: boolean;
  error: string | null;
}

const initialState: SkuDataState = {
  data: { rowData: [] },
  loading: false,
  error: null,
};

export const fetchSkuData = createAsyncThunk("sku/fetchSkuData", async () => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  try {
    const promises = [
      fetch("/mock-DB/SKU-data/sku.json").then((res) => res.json()),
    ];

    let [skuData] = await Promise.all(promises);

    const rowData: ProductData[] = skuData;

    return { rowData };
  } catch (error) {
    throw new Error("Failed to fetch SKU Data");
  }
});

const skuSlice = createSlice({
  name: "planning",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkuData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSkuData.fulfilled,
        (state, action: PayloadAction<{ rowData: ProductData[] }>) => {
          state.loading = false;
          state.data = action.payload;
          // console.log("fetchSkuData.fulfilled", state.data);
        }
      )
      .addCase(fetchSkuData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch Store Data";
      });
  },
});

export default skuSlice.reducer;
