import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CalendarScreen } from "./screens/CalendarScreen";
import { Homepage } from "./screens/Homepage";
import { Modal } from "./screens/Modal";
import { SubmitIdea } from "./screens/SubmitIdea";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Homepage />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/submitidea",
    element: <SubmitIdea />,
  },
  {
    path: "/modal",
    element: <Modal />,
  },
  {
    path: "/calendar",
    element: <CalendarScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
