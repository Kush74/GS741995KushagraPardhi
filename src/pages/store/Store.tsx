import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-custom-hooks";
import { RootState } from "../../redux/store";
import { fetchStoreData, StoreData } from "../../redux/storePage/storeSlice";
import { RiDeleteBin6Line } from "@remixicon/react";
import { AgGridReact } from "ag-grid-react";

export const StorePage = () => {
  const [rowData, setRowData] = useState<any>([]);
  const [columnDefs]: any = useState([
    {
      field: "delete",
      headerName: "",
      width: 60,
      cellClass: "flex items-center justify-center",
      cellRenderer: (params: { data: StoreData }) => {
        return (
          <button onClick={() => handleDeleteRow(params.data.id)}>
            <RiDeleteBin6Line />
          </button>
        );
      },
    },
    { field: "s_no", headerName: "S.No", rowDrag: true },
    {
      field: "label",
      headerName: "Store",
      cellStyle: { borderRight: "2px solid #ccc" },
      headerStyle: { borderRight: "2px solid #ccc" },
    },
    { field: "city" },
    { field: "state" },
  ]);
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state: RootState) => state.storeData);

  useEffect(() => {
    dispatch(fetchStoreData());
  }, [dispatch]);

  useEffect(() => {
    if (data.rowData.length > 0) {
      setRowData(data.rowData);
    }
  }, [data]);

  const handleDeleteRow = useCallback((id: string) => {
    setRowData((prevData: StoreData[]) =>
      prevData.filter((row) => row.id !== id)
    );
  }, []);

  return (
    <div className="h-full overflow-auto flex flex-col relative">
      <div className="flex-1">
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>

      <div className="mt-4">
        <button className="shadow-lg px-4 py-2 rounded-md font-medium bg-orange-300 hover:bg-orange-400">
          NEW STORE
        </button>
      </div>
    </div>
  );
};
