import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux-custom-hooks";
import { RootState } from "../redux/store";

export const LoginPage = () => {
  const [email, setEmail] = useState("sampleUser@company.com");
  const [password, setPassword] = useState("secretPass");
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl mb-6 text-center font-semibold">Login</h2>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-sm p-2 border-2 border-gray-200 rounded  focus:border-gray-900  "
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border-2 border-gray-200 rounded  focus:border-gray-900 "
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gray-900 text-white font-medium p-2 rounded-md hover:bg-gray-600 disabled:bg-gray-300"
        >
          {loading ? "Authenticating..." : "Login"}
        </button>

        {error && (
          <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};
