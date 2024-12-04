import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter as Router, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import Profile from "./pages/Profile.tsx";
import Login from "./pages/Login.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

const router = Router([
  {
    Component: ProtectedRoute,
    children: [
      {
        // This should be a protected route
        path: "profile",
        Component: Profile,
      },
      {
        // This should be a protected route
        path: "about",
        Component: About,
      },
    ],
  },
  {
    path: "/",
    Component: App,
  },
  {
    path: "login",
    Component: Login,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
