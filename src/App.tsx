import Layout from "./components/Layout";
import "./App.css";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import PostFrom from "./pages/PostFrom";
import Profile from "./pages/Profile";
import RestApis from "./pages/RestApisScreen";
import CounterWithRedux from "./pages/CounterWithRedux";
import CartViewScreen from "./pages/CartViewScreen";
import HooksScreen from "./pages/hooks/HooksScreen";
import MemoScreen from "./pages/hooks/MemoScreen";
import CallBackHookScreen from "./pages/hooks/CallBackHookScreen";
import UseRefHookScreen from "./pages/hooks/UseRefHookScreen";

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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        <Route path="postform" element={<PostFrom data={userData} />} />
        <Route path="apis" element={<RestApis />} />
        <Route path="cartView" element={<CartViewScreen />} />
        <Route path="hooks" element={<HooksScreen />} />

        {/* ✅ Separate route */}
        <Route path="hooks/counter" element={<CounterWithRedux />} />
        <Route path="hooks/memo" element={<MemoScreen />} />
        <Route path="hooks/callback" element={<CallBackHookScreen />} />
        <Route path="hooks/useref" element={<UseRefHookScreen />} />
      </Route>
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
