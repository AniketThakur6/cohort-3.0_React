import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { ContextProvider } from "./context/MyContext.jsx";
import App from "./App.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import LoginRouter from "./routes/LoginRouter.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <LoginRouter />
    </ContextProvider>
  </BrowserRouter>,
);
