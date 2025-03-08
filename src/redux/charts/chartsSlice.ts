import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface ChartsDataState {
  data: { storeMap: Map; dataSeries: object[] };
  loading: boolean;
  error: string | null;
}

const initialState: ChartsDataState = {
  data: { storeMap: {}, dataSeries: [] },
  loading: false,
  error: null,
};

type Map = Record<string, string>;
type ApiChartData = {
  Week: string;
  "GM Dollars": string;
  "Sales Dollars": string;
  "GM %": string;
};

export const getChartData = createAsyncThunk(
  "charts/getChartData",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));

    try {
      const promises = [
        fetch("/mock-DB/stores-data/stores.json").then((res) => res.json()),
        fetch("/mock-DB/charts-data/chart.json").then((res) => res.json()),
      ];

      let [storesData, chartData] = await Promise.all(promises);

      const storeMap: Map = {};
      storesData.forEach((item: { ID: string; Label: string }) => {
        if (!storeMap[item.ID]) {
          storeMap[item.ID] = item.Label; // Example: ST035 → Store 35
        }
      });

      const dataSeries = chartData.map((item: ApiChartData) => ({
        week: item.Week,
        gmDollars: parseFloat(item["GM Dollars"].replace(/[^0-9.-]+/g, "")),
        gmPercent: parseFloat(item["GM %"].replace(/[^0-9.-]+/g, "")),
        salesDollars: parseFloat(
          item["Sales Dollars"].replace(/[^0-9.-]+/g, "")
        ),
      }));

      return { storeMap, dataSeries };
    } catch (error) {
      throw new Error("Failed to fetch graphs data");
    }
  }
);

const graphPageSlice = createSlice({
  name: "graphData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getChartData.fulfilled,
        (
          state,
          action: PayloadAction<{ storeMap: Map; dataSeries: object[] }>
        ) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(getChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to get Graph Data";
      });
  },
});

export default graphPageSlice.reducer;
