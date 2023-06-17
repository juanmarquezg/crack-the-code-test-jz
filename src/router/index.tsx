import { createHashRouter } from "react-router-dom";

import { Home } from "../pages/";
import { Rutas } from "../pages/";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/rutas",
    element: <Rutas />,
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);
