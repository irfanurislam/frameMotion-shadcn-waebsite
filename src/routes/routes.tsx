import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home/Index";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);
