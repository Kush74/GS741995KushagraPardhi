import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-custom-hooks";
import { VerticalSideBar } from "./VerticalSideBar";

export const ProtectedRoutes = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <div className="flex">
      <VerticalSideBar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};
