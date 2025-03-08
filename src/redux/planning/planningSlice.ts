import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  ColumnDef,
  generateMappings,
  getColumnDefs,
  RowData,
  transformRowData,
} from "./planningUtils";

interface PlanningDataState {
  data: { rowData: RowData[]; colData: ColumnDef[] };
  loading: boolean;
  error: string | null;
}

const initialState: PlanningDataState = {
  data: { rowData: [], colData: [] },
  loading: false,
  error: null,
};

export const fetchPlanningData = createAsyncThunk(
  "planning/fetchPlanningData",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    try {
      const promises = [
        fetch("/mock-DB/stores-data/stores.json").then((res) => res.json()),
        fetch("/mock-DB/SKU-data/sku.json").then((res) => res.json()),
        fetch("/mock-DB/planning-data/calendar.json").then((res) => res.json()),
        fetch("/mock-DB/planning-data/planning.json").then((res) => res.json()),
        fetch("/mock-DB/planning-data/calculated.json").then((res) =>
          res.json()
        ),
      ];

      let [storesData, skuData, calendarData, planningData, calculatedData] =
        await Promise.all(promises);

      generateMappings(storesData, skuData);
      const rowData = transformRowData(
        calculatedData,
        calendarData,
        planningData
      );

      const colData = getColumnDefs(calendarData);
      return { rowData, colData };
    } catch (error) {
      throw new Error("Failed to fetch Planning Data");
    }
  }
);

const planningSlice = createSlice({
  name: "planning",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlanningData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPlanningData.fulfilled,
        (
          state,
          action: PayloadAction<{ rowData: RowData[]; colData: ColumnDef[] }>
        ) => {
          state.loading = false;
          state.data = action.payload;
          // console.log("fetchPlanningData.fulfilled", state.data);
        }
      )
      .addCase(fetchPlanningData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch Planning Data";
      });
  },
});

export default planningSlice.reducer;
