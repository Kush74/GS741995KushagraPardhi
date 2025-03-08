import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { ProtectedRoutes } from "./components/nav/ProtectedRoutes";
import { StorePage } from "./pages/store/Store";
import { SkuPage } from "./pages/sku/SKU";
import PlanningPage from "./pages/planning/Planning";
import ChartsPage from "./pages/Charts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<StorePage />} />
        <Route path="/sku" element={<SkuPage />} />
        <Route path="/planning" element={<PlanningPage />} />
        <Route path="/charts" element={<ChartsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
