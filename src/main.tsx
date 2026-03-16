
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter} from "react-router-dom";
import Home from "./Home";
import Users from "./pages/Users";
import Settings from "./pages/Settings";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
       { 
        path: "home", 
        element: <Home /> },
      { path: "users", 
        element: <Users /> },
       { path: "settings", 
        element: <Settings /> },
      ]
  },
]); 




ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
