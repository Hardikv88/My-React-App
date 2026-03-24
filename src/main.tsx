import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import { Provider } from "react-redux";
import { store } from "./features/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
