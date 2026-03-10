import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Cars } from "./components/Cars";
import { Bikes } from "./components/Bikes";
import { VehicleDetail } from "./components/VehicleDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "cars", Component: Cars },
      { path: "bikes", Component: Bikes },
      { path: "vehicle/:id", Component: VehicleDetail },
    ],
  },
]);
