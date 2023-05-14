import { Navigate, Outlet } from "react-router-dom";
import { NEWS_PROJECT_TOKEN } from "./constants";

const PrivateRoute = () => {
  return localStorage.getItem(NEWS_PROJECT_TOKEN) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
