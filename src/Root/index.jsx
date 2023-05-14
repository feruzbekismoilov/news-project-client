import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Home";
// import Header from "../components/Header";
import NotFoundPage from "../pages/NotFound";
import LoginPage from "../pages/Login";
import PrivateRoute from "../utils/PrivateRoutes";
import Dashboard from "../pages/Admin/Dashboard";
import AdminLayout from "../components/AdminLayout";
const Root = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/home" element={<Header />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<AdminLayout />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Root;
