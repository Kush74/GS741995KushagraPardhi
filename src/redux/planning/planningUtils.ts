type CalculatedData = {
  Store: string;
  SKU: string;
  Week: string;
  "Sales Units": string;
  "Sales Dollars": string;
  "Cost Dollars": string;
  "GM Dollars": string;
  "GM %": string;
};

type CalendarData = {
  "Seq No.": string;
  Week: string;
  "Week Label": string;
  Month: string;
  "Month Label": string;
};

type PlanningData = {
  Store: string;
  SKU: string;
  Week: string;
  "Sales Units": string;
};

type WeeklyData = {
  salesUnits?: string;
  salesDollars?: string;
  gmDollars?: string;
  gmPercent?: string;
};

type CombinedData = {
  store: string;
  sku: string;
  weeklyData: Record<string, WeeklyData>;
};

export type RowData = {
  store: string;
  sku: string;
  [key: string]: string | number;
};

export const transformRowData = (
  calculated: CalculatedData[],
  calendar: CalendarData[],
  planning: PlanningData[]
): RowData[] => {
  let rowData: RowData[] = [];

  // Group weeks by month
  let monthMap: Record<
    string,
    { monthLabel: string; weeks: Record<string, string> }
  > = {};

  calendar.forEach(
    ({ Month, "Month Label": monthLabel, Week, "Week Label": weekLabel }) => {
      if (!monthMap[Month]) {
        monthMap[Month] = { monthLabel, weeks: {} };
      }
      monthMap[Month].weeks[Week] = weekLabel;
    }
  );
  // console.log("Month MAP", monthMap);

  // Merge calculated and planning data
  let combinedData: Record<string, CombinedData> = {};

  // Process calculated data
  calculated.forEach(
    ({
      Store,
      SKU,
      Week,
      "Sales Units": salesUnits,
      "Sales Dollars": salesDollars,
      "GM Dollars": gmDollars,
      "GM %": gmPercent,
    }) => {
      let key = `${Store}_${SKU}`;

      if (!combinedData[key]) {
        combinedData[key] = { store: Store, sku: SKU, weeklyData: {} };
      }

      // let cleanSalesDollars = parseFloat(
      //   salesDollars.replace(/[^0-9.-]+/g, "")
      // );
      // let cleanGmDollars = parseFloat(gmDollars.replace(/[^0-9.-]+/g, ""));
      // let cleanGmPercent = parseFloat(gmPercent.replace(/[^0-9.-]+/g, ""));
      let cleanSalesDollars = salesDollars;
      let cleanGmDollars = gmDollars;
      let cleanGmPercent = gmPercent;

      combinedData[key].weeklyData[Week] = {
        salesUnits: salesUnits,
        salesDollars: cleanSalesDollars,
        gmDollars: cleanGmDollars,
        gmPercent: cleanGmPercent,
      };
    }
  );

  // Process planning data to add missing sales units
  planning.forEach(({ Store, SKU, Week, "Sales Units": salesUnits }) => {
    let key = `${Store}_${SKU}`;

    if (!combinedData[key]) {
      combinedData[key] = { store: Store, sku: SKU, weeklyData: {} };
    }

    if (!combinedData[key].weeklyData[Week]) {
      combinedData[key].weeklyData[Week] = {};
    }

    combinedData[key].weeklyData[Week].salesUnits = salesUnits;
  });

  // Construct final rowData
  Object.values(combinedData).forEach(({ store, sku, weeklyData }) => {
    let row: RowData = { store: storeMap[store], sku: skuMap[sku] };

    // Iterate over months and weeks dynamically
    Object.entries(monthMap).forEach(([month, { weeks }]) => {
      Object.entries(weeks).forEach(([week, weekLabel]) => {
        row[`${week}_sales_units`] = weeklyData[week]?.salesUnits || "0.00";
        row[`${week}_sales_dollars`] =
          weeklyData[week]?.salesDollars || "$0.00";
        row[`${week}_gm_dollars`] = weeklyData[week]?.gmDollars || "$0.00";
        row[`${week}_gm_percent`] = weeklyData[week]?.gmPercent || "0.00%";
      });
    });

    rowData.push(row);
  });
  // console.log("rowData", rowData);

  return rowData;
};

export type ColumnDef = {
  headerName: string;
  children?: ColumnDef[];
  groupId?: string;
  field?: string;
  sortable?: boolean;
  filter?: boolean;
  cellClassRules?: any;
};

export function getColumnDefs(calendar: CalendarData[]): ColumnDef[] {
  let columnDefs: ColumnDef[] = [
    {
      headerName: "Store",
      field: "store",
      sortable: true,
      filter: true,
    },
    {
      headerName: "SKU",
      field: "sku",
      sortable: true,
      filter: true,
    },
  ];

  // Group weeks by month
  let monthMap: Record<
    string,
    { monthLabel: string; weeks: { week: string; weekLabel: string }[] }
  > = {};

  calendar.forEach(
    ({ Month, "Month Label": monthLabel, Week, "Week Label": weekLabel }) => {
      if (!monthMap[Month]) {
        monthMap[Month] = { monthLabel, weeks: [] };
      }
      monthMap[Month].weeks.push({ week: Week, weekLabel });
    }
  );

  // Build columns dynamically based on grouped months and weeks
  Object.values(monthMap).forEach(({ monthLabel, weeks }) => {
    let monthGroup: ColumnDef = {
      headerName: monthLabel,
      groupId: monthLabel,
      children: [],
    };

    weeks.forEach(({ week, weekLabel }) => {
      let weekGroup: ColumnDef = {
        headerName: weekLabel,
        groupId: weekLabel,
        children: [],
      };
      weekGroup.children!.push(
        {
          headerName: "Sales Units",
          field: `${week}_sales_units`,
          sortable: true,
        },
        {
          headerName: "Sales Dollars",
          field: `${week}_sales_dollars`,
          sortable: true,
        },
        {
          headerName: "GM Dollars",
          field: `${week}_gm_dollars`,
          sortable: true,
        },
        {
          headerName: "GM Percent",
          field: `${week}_gm_percent`,
          sortable: true,
          // cellClassRules: percentCellClassRules,
        }
      );
      monthGroup.children!.push(weekGroup);
    });

    columnDefs.push(monthGroup);
  });

  // console.log("columnDefs", columnDefs);

  return columnDefs;
}

type Map = Record<string, string>;
const storeMap: Map = {};
const skuMap: Map = {};

export function generateMappings(
  storesData: { ID: string; Label: string }[],
  skuData: { id: string; label: string }[]
): void {
  storesData.forEach((item) => {
    if (!storeMap[item.ID]) {
      storeMap[item.ID] = item.Label; // Example: ST035 → Store 35
    }
  });

  skuData.forEach((item) => {
    if (!skuMap[item.id]) {
      skuMap[item.id] = item.label; // Example: SK00158 → Product 158
    }
  });
}

export const percentCellClassRules = {
  "bg-green-200 text-black": (params: any) =>
    parseFloat(params.value?.replace("%", "") || "0") >= 40,
  "bg-yellow-200 text-black": (params: any) => {
    const value = parseFloat(params.value?.replace("%", "") || "0");
    return value >= 10 && value < 40;
  },
  "bg-orange-200 text-black": (params: any) => {
    const value = parseFloat(params.value?.replace("%", "") || "0");
    return value >= 5 && value < 10;
  },
  "bg-red-200 text-black": (params: any) =>
    parseFloat(params.value?.replace("%", "") || "0") < 5,
};
