import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./chakra/theme.js";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ChecklistContextProvider } from "./contexts/ChecklistContext";
import { useAuthContext } from "./hooks/useAuthContext.js";

import Login from "./pages/Gateway/Login.jsx";
import Register from "./pages/Gateway/Register.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Checklist from "./pages/Checklist/Checklist.jsx";
import SleepData from "./pages/SleepData/SleepData.jsx";
import HeartRate from "./pages/HeartRate.jsx";
import SpO2Monitoring from "./pages/SpO2Monitoring.jsx";
import Main from "./pages/Main.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "checklist",
        element: <Checklist />,
      },
      {
        path: "sleep-data",
        element: <SleepData />,
      },
      {
        path: "heart-rate",
        element: <HeartRate />,
      },
      {
        path: "spo2-monitoring",
        element: <SpO2Monitoring />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChecklistContextProvider>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </ChecklistContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
