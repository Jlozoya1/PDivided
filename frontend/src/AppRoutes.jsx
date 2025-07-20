import { createBrowserRouter, RouterProvider, } from "react-router";
import App from "./App";
import Layout from "./components/layout";
import IndexResumen from "./components/dashboard-resumen/index"
import IndexPedidos from "./components/dashboard-pedidos/index"
import IndexMenu from "./components/dashboard-menu/index"
import IndexReportes from "./components/dashboard-reportes/index"

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />)
  },
  {
    path:"/dashboard",
    element: (<Layout/>),
    children: [
      {
        index: true,
        element: <IndexResumen/>
      },
      {
        path: "resumen",
        element: <IndexResumen/>
      },
      {
        path: "pedidos",
        element: <IndexPedidos/>
      },
      {
        path: "menu",
        element: <IndexMenu/>
      },
      {
        path: "reportes",
        element: <IndexReportes/>
      },

    ]
  }
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}