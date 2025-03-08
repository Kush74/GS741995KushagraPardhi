import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import planningReducer from "./planning/planningSlice";
import graphPageReducer from "./charts/chartsSlice";
import storePageReducer from "./storePage/storeSlice";
import skuPageReducer from "./sku/skuSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    storeData: storePageReducer,
    skuData: skuPageReducer,
    planningData: planningReducer,
    graphPageData: graphPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
