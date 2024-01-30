import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const InternalServerError = lazy(() => import("@/pages/500"));
const NotFound = lazy(() => import("@/pages/404"));
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    ErrorBoundary: InternalServerError,
  },
  {
    path: "*",
    Component: NotFound,
    ErrorBoundary: InternalServerError,
  },
]);

export default router;
