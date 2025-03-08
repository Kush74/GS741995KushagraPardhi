import { percentCellClassRules } from "../../redux/planning/planningUtils";

export const planningColConfig = [
  {
    headerName: "Store",
    field: "store",
    sortable: true,
    filter: true,
    pinned: "left",
  },
  {
    headerName: "SKU",
    field: "sku",
    sortable: true,
    filter: true,
    pinned: "left",
  },
  {
    headerName: "Feb",
    children: [
      {
        headerName: "Week 01",
        children: [
          {
            headerName: "Sales Units",
            field: "W01_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W01_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W01_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W01_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 02",
        children: [
          {
            headerName: "Sales Units",
            field: "W02_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W02_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W02_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W02_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 03",
        children: [
          {
            headerName: "Sales Units",
            field: "W03_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W03_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W03_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W03_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 04",
        children: [
          {
            headerName: "Sales Units",
            field: "W04_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W04_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W04_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W04_gm_percent",
            sortable: true,
          },
        ],
      },
    ],
  },
  {
    headerName: "Mar",
    children: [
      {
        headerName: "Week 05",
        children: [
          {
            headerName: "Sales Units",
            field: "W05_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W05_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W05_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W05_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 06",
        children: [
          {
            headerName: "Sales Units",
            field: "W06_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W06_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W06_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W06_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 07",
        children: [
          {
            headerName: "Sales Units",
            field: "W07_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W07_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W07_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W07_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 08",
        children: [
          {
            headerName: "Sales Units",
            field: "W08_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W08_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W08_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W08_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 09",
        children: [
          {
            headerName: "Sales Units",
            field: "W09_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W09_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W09_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W09_gm_percent",
            sortable: true,
          },
        ],
      },
    ],
  },
  {
    headerName: "Apr",
    children: [
      {
        headerName: "Week 10",
        children: [
          {
            headerName: "Sales Units",
            field: "W10_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W10_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W10_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W10_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 11",
        children: [
          {
            headerName: "Sales Units",
            field: "W11_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W11_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W11_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W11_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 12",
        children: [
          {
            headerName: "Sales Units",
            field: "W12_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W12_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W12_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W12_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 13",
        children: [
          {
            headerName: "Sales Units",
            field: "W13_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W13_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W13_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W13_gm_percent",
            sortable: true,
          },
        ],
      },
    ],
  },
  {
    headerName: "May",
    children: [
      {
        headerName: "Week 14",
        children: [
          {
            headerName: "Sales Units",
            field: "W14_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W14_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W14_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W14_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 15",
        children: [
          {
            headerName: "Sales Units",
            field: "W15_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W15_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W15_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W15_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 16",
        children: [
          {
            headerName: "Sales Units",
            field: "W16_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W16_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W16_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W16_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 17",
        children: [
          {
            headerName: "Sales Units",
            field: "W17_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W17_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W17_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W17_gm_percent",
            sortable: true,
          },
        ],
      },
    ],
  },
  {
    headerName: "Jun",
    children: [
      {
        headerName: "Week 18",
        children: [
          {
            headerName: "Sales Units",
            field: "W18_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W18_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W18_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W18_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 19",
        children: [
          {
            headerName: "Sales Units",
            field: "W19_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W19_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W19_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W19_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 20",
        children: [
          {
            headerName: "Sales Units",
            field: "W20_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W20_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W20_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W20_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 21",
        children: [
          {
            headerName: "Sales Units",
            field: "W21_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W21_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W21_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W21_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 22",
        children: [
          {
            headerName: "Sales Units",
            field: "W22_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W22_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W22_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W22_gm_percent",
            sortable: true,
          },
        ],
      },
    ],
  },
  {
    headerName: "Jul",
    children: [
      {
        headerName: "Week 23",
        children: [
          {
            headerName: "Sales Units",
            field: "W23_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W23_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W23_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W23_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 24",
        children: [
          {
            headerName: "Sales Units",
            field: "W24_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W24_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W24_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W24_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 25",
        children: [
          {
            headerName: "Sales Units",
            field: "W25_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W25_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W25_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W25_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 26",
        children: [
          {
            headerName: "Sales Units",
            field: "W26_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W26_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W26_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W26_gm_percent",
            sortable: true,
          },
        ],
      },
    ],
  },
  {
    headerName: "Aug",
    children: [
      {
        headerName: "Week 27",
        children: [
          {
            headerName: "Sales Units",
            field: "W27_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W27_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W27_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W27_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 28",
        children: [
          {
            headerName: "Sales Units",
            field: "W28_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W28_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W28_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W28_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 29",
        children: [
          {
            headerName: "Sales Units",
            field: "W29_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W29_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W29_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W29_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 30",
        children: [
          {
            headerName: "Sales Units",
            field: "W30_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W30_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W30_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W30_gm_percent",
            sortable: true,
          },
        ],
      },
    ],
  },
  {
    headerName: "Sep",
    children: [
      {
        headerName: "Week 31",
        children: [
          {
            headerName: "Sales Units",
            field: "W31_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W31_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W31_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W31_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 32",
        children: [
          {
            headerName: "Sales Units",
            field: "W32_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W32_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W32_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W32_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 33",
        children: [
          {
            headerName: "Sales Units",
            field: "W33_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W33_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W33_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W33_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 34",
        children: [
          {
            headerName: "Sales Units",
            field: "W34_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W34_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W34_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W34_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 35",
        children: [
          {
            headerName: "Sales Units",
            field: "W35_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W35_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W35_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W35_gm_percent",
            sortable: true,
          },
        ],
      },
    ],
  },
  {
    headerName: "Oct",
    children: [
      {
        headerName: "Week 36",
        children: [
          {
            headerName: "Sales Units",
            field: "W36_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W36_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W36_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W36_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 37",
        children: [
          {
            headerName: "Sales Units",
            field: "W37_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W37_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W37_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W37_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 38",
        children: [
          {
            headerName: "Sales Units",
            field: "W38_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W38_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W38_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W38_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 39",
        children: [
          {
            headerName: "Sales Units",
            field: "W39_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W39_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W39_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W39_gm_percent",
            sortable: true,
          },
        ],
      },
    ],
  },
  {
    headerName: "Nov",
    children: [
      {
        headerName: "Week 40",
        children: [
          {
            headerName: "Sales Units",
            field: "W40_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W40_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W40_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W40_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 41",
        children: [
          {
            headerName: "Sales Units",
            field: "W41_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W41_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W41_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W41_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 42",
        children: [
          {
            headerName: "Sales Units",
            field: "W42_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W42_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W42_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W42_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 43",
        children: [
          {
            headerName: "Sales Units",
            field: "W43_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W43_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W43_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W43_gm_percent",
            sortable: true,
          },
        ],
      },
    ],
  },
  {
    headerName: "Dec",
    children: [
      {
        headerName: "Week 44",
        children: [
          {
            headerName: "Sales Units",
            field: "W44_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W44_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W44_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W44_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 45",
        children: [
          {
            headerName: "Sales Units",
            field: "W45_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W45_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W45_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W45_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 46",
        children: [
          {
            headerName: "Sales Units",
            field: "W46_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W46_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W46_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W46_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 47",
        children: [
          {
            headerName: "Sales Units",
            field: "W47_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W47_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W47_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W47_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 48",
        children: [
          {
            headerName: "Sales Units",
            field: "W48_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W48_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W48_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W48_gm_percent",
            sortable: true,
          },
        ],
      },
    ],
  },
  {
    headerName: "Jan",
    children: [
      {
        headerName: "Week 49",
        children: [
          {
            headerName: "Sales Units",
            field: "W49_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W49_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W49_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W49_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 50",
        children: [
          {
            headerName: "Sales Units",
            field: "W50_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W50_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W50_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W50_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 51",
        children: [
          {
            headerName: "Sales Units",
            field: "W51_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W51_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W51_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W51_gm_percent",
            sortable: true,
          },
        ],
      },
      {
        headerName: "Week 52",
        children: [
          {
            headerName: "Sales Units",
            field: "W52_sales_units",
            sortable: true,
          },
          {
            headerName: "Sales Dollars",
            field: "W52_sales_dollars",
            sortable: true,
          },
          {
            headerName: "GM Dollars",
            field: "W52_gm_dollars",
            sortable: true,
          },
          {
            headerName: "GM Percent",
            cellClassRules: percentCellClassRules,
            field: "W52_gm_percent",
            sortable: true,
          },
        ],
      },
    ],
  },
];
