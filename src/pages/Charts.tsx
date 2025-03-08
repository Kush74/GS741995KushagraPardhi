import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-custom-hooks";
import { RootState } from "../redux/store";
import { getChartData } from "../redux/charts/chartsSlice";
import { AgCharts } from "ag-charts-react";
import {
  AgBarSeriesOptions,
  AgCartesianAxisOptions,
  AgCartesianChartOptions,
  AgCartesianSeriesOptions,
  AgLineSeriesOptions,
} from "ag-charts-community";
import DropDown from "../components/form-elements/DropDown";

const GM_DOLLAR: AgBarSeriesOptions = {
  type: "bar",
  xKey: "week",
  yKey: "gmDollars",
  yName: "GM Dollars",
};

const GM_PERCENT: AgLineSeriesOptions = {
  type: "line",
  xKey: "week",
  yKey: "gmPercent",
  yName: "GM %",
};

const BAR_AND_LINE: AgCartesianSeriesOptions[] = [
  { ...GM_DOLLAR, type: "bar" },
  { ...GM_PERCENT, type: "line" },
];

export default function ChartsPage() {
  const [selectOptions, changeSelectOptions] = useState<any>([]);
  const [chartOptions, setChartOptions] = useState<AgCartesianChartOptions>({
    theme: "ag-default-dark",
    data: [],
    title: {
      text: "Gross Margin",
    },
    series: BAR_AND_LINE,
    axes: [
      {
        type: "category",
        position: "bottom",
      },
      {
        // primary y-axis
        type: "number",
        position: "left",
        keys: ["gmDollars"],
        label: {
          formatter: (params) => {
            return "$" + params.value;
          },
        },
      },
      {
        // secondary y-axis
        type: "number",
        position: "right",
        keys: ["gmPercent"],
        label: {
          formatter: (params) => {
            return params.value + "%";
          },
        },
      },
    ] as AgCartesianAxisOptions[],
  });

  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state: RootState) => state.graphPageData);

  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };

  useEffect(() => {
    dispatch(getChartData());
  }, [dispatch]);

  useEffect(() => {
    // console.log("Chart Data", data);
    const selOptions: { label: string; value: string }[] = [];
    Object.entries(data.storeMap).forEach(([value, label]) => {
      selOptions.push({
        value,
        label,
      });
    });
    changeSelectOptions(selOptions);
    setChartOptions(() => ({ ...chartOptions, data: data.dataSeries }));
  }, [data]);

  return (
    <div className="h-full overflow-auto  relative flex flex-col">
      <div className="mb-4">
        <DropDown
          options={selectOptions}
          onSelect={handleSelect}
          placeholder="Select an option"
        />
      </div>
      <div className="flex-1 relative rounded-lg overflow-hidden">
        <AgCharts style={{ height: "100%" }} options={chartOptions} />
      </div>
    </div>
  );
}
