import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProivider from "./context/AuthContext";
import { QueryProvider } from "./lib/reac-query/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryProvider>
      <AuthProivider>
        <App />
      </AuthProivider>
    </QueryProvider>
  </BrowserRouter>
);
