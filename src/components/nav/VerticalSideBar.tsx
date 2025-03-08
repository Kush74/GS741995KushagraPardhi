import { JSX } from "react";
import { NavLink } from "react-router-dom";
import { RiStore3Line, RiBarChartBoxLine } from "@remixicon/react";
import { Shapes, ChartColumn } from "lucide-react";

interface SideBarItem {
  path: string;
  label: string;
  icon?: JSX.Element;
}

const sideBarConfig: SideBarItem[] = [
  {
    label: "STORE",
    path: "/",
    icon: <RiStore3Line />,
  },
  {
    label: "SKU",
    path: "/sku",
    icon: <Shapes />,
  },
  {
    label: "Planning",
    path: "/planning",
    icon: <ChartColumn />,
  },
  {
    label: "Charts",
    path: "/charts",
    icon: <RiBarChartBoxLine />,
  },
];

export const VerticalSideBar = () => {
  const sideNavConfig = sideBarConfig;
  return (
    <nav className="bg-white w-60 h-[calc(100dvh-80px)] p-4 pr-0">
      <div className="space-y-2">
        {sideNavConfig.map((navItem) => (
          <NavLink
            key={navItem.path}
            to={navItem.path}
            className={({ isActive }) =>
              `block font-semibold text-gray-800 hover:bg-gray-300 p-4 rounded-l-lg ${
                isActive ? "bg-gray-300 text-gray-600" : ""
              }`
            }
          >
            <div className="flex gap-4">
              {navItem.icon}
              <span>{navItem.label}</span>
            </div>
          </NavLink>
        ))}
        {/* <NavLink
          key="/"
          to="/"
          className={({ isActive }) =>
            `block font-semibold hover:bg-gray-50 p-2 rounded-l-lg ${
              isActive ? "bg-white  text-gray-500" : ""
            }`
          }
        >
          STORE
        </NavLink>
        <NavLink
          key="/sku"
          to="/sku"
          className={({ isActive }) =>
            `block font-semibold hover:bg-gray-50 p-2 rounded-l-lg ${
              isActive ? "bg-white text-gray-500" : ""
            }`
          }
        >
          SKU
        </NavLink> */}
      </div>
    </nav>
  );
};
