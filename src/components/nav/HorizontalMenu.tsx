import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { logout } from "../../redux/auth/authSlice";

export const HorizontalMenu = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="bg-white py-4 px-8 ">
      <div className="flex justify-between items-center h-12">
        <Link to="/" className="text-3xl font-medium hover:text-gray-500">
          <img src="/logo.svg" alt="Logo" className="h-12" />
        </Link>
        <div className="space-x-4">
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="text-white py-2 px-4 rounded-md text-md font-medium bg-gray-900 hover:bg-gray-700"
            >
              Login
            </Link>
          ) : (
            <button
              className="py-2 px-3 my-0 rounded-md border-2 border-gray-900 text-sm font-medium  hover:bg-gray-300"
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
