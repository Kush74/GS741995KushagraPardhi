import { RiDeleteBin6Line } from "@remixicon/react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-custom-hooks";
import { fetchSkuData, ProductData } from "../../redux/sku/skuSlice";
import { RootState } from "../../redux/store";
import { useCallback, useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";

export const SkuPage = () => {
  const [rowData, setRowData] = useState<ProductData[]>([]);
  const [columnDefs]: any = useState([
    {
      field: "delete",
      headerName: "Del",
      width: 60,
      cellClass: "flex items-center justify-center",
      cellRenderer: (params: { data: ProductData }) => {
        return (
          <button onClick={() => handleDeleteRow(params.data.id)}>
            <RiDeleteBin6Line />
          </button>
        );
      },
    },
    {
      field: "label",
      headerName: "SKU",
      cellStyle: { borderRight: "2px solid #ccc" },
      headerStyle: { borderRight: "2px solid #ccc" },
    },
    {
      field: "price",
    },
    {
      field: "cost",
    },
  ]);
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state: RootState) => state.skuData);

  useEffect(() => {
    dispatch(fetchSkuData());
  }, [dispatch]);

  useEffect(() => {
    if (data.rowData.length > 0) {
      setRowData(data.rowData);
    }
  }, [data]);

  const handleDeleteRow = useCallback((id: string) => {
    setRowData((prevData) => prevData.filter((row) => row.id !== id));
  }, []);

  return (
    <div className="h-full overflow-auto flex flex-col relative">
      <div className="flex-1">
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>

      <div className="mt-4">
        <button className="shadow-lg px-4 py-2 rounded-md font-medium bg-orange-300 hover:bg-orange-400">
          NEW SKU
        </button>
      </div>
    </div>
  );
};
