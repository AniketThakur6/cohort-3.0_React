import { createRoot } from "react-dom/client";
import AppRoute from "./routes/AppRoute";
import { ContextProvider } from "./context/ContextApi";
import "./index.css";
import { Bounce, ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ContextProvider>
      <AppRoute />
      <ToastContainer autoClose={3000} theme="dark" transition={Bounce} />
    </ContextProvider>
  </AuthProvider>,
);
