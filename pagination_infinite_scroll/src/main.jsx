import { createRoot } from "react-dom/client";
import "./index.css";
import TanstackPagination from "./TanstackPagination.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import InfinitScrolling from "./InfinitScrolling.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <InfinitScrolling />
  </QueryClientProvider>,
);
