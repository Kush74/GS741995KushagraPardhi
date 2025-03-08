import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-custom-hooks";
import { RootState } from "../../redux/store";
import { fetchPlanningData } from "../../redux/planning/planningSlice";
import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  ModuleRegistry,
  ValidationModule,
} from "ag-grid-community";
import { planningColConfig } from "./planing-constants";
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ValidationModule /* Development Only */,
]);

export default function PlanningPage() {
  const [rowData, setRowData] = useState<any>([]);
  const [columnData] = useState<any>(planningColConfig);

  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.planningData
  );

  useEffect(() => {
    dispatch(fetchPlanningData());
  }, [dispatch]);

  useEffect(() => {
    if (data.colData.length > 0) {
      // setColData(data.colData);
      setRowData(data.rowData);
    }
  }, [data]);

  return (
    <div className="h-full overflow-auto">
      {columnData && <AgGridReact rowData={rowData} columnDefs={columnData} />}
    </div>
  );
}
