import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import PostFrom from "../pages/PostFrom";
import RestApis from "../pages/RestApisScreen";
import CartViewScreen from "../pages/CartViewScreen";
import Profile from "../pages/Profile";
import CounterWithRedux from "../pages/CounterWithRedux";
import HooksScreen from "../pages/hooks/HooksScreen";
import MemoScreen from "../pages/hooks/MemoScreen";
import CallBackHookScreen from "../pages/hooks/CallBackHookScreen";
import UseRefHookScreen from "../pages/hooks/UseRefHookScreen";
import LoginScreen from "../pages/authentication/LoginScreen";
import Users from "../pages/Users";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import Settings from "../pages/settings/Settings";

const userData = {
  name: "Hardik",
  email: "patel@yopmail.com",
  phone: "56789098765",
  gender: "male",
  country: "India",
  state: "Gujarat",
  city: "Ahmedabad",
  address: "this user information",
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* ✅ Public Route */}
      <Route
        path="/"
        element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        }
      />

      {/* ✅ Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="postform" element={<PostFrom data={userData} />} />
          <Route path="apis" element={<RestApis />} />
          <Route path="cartView" element={<CartViewScreen />} />
          <Route path="hooks" element={<HooksScreen />} />

          <Route path="hooks/counter" element={<CounterWithRedux />} />
          <Route path="hooks/memo" element={<MemoScreen />} />
          <Route path="hooks/callback" element={<CallBackHookScreen />} />
          <Route path="hooks/useref" element={<UseRefHookScreen />} />
        </Route>

        {/* Profile outside layout but protected */}
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
