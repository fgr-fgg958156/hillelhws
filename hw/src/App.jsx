import React, {useEffect, useState} from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomeRoute from "./routes/HomeRoute";
import CountryRoute from "./routes/CountryRoute";
import RootLayout from "./layouts/RootLayout";

export default function App(){

  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: HomeRoute
        },
        {
          path: "/countries/:code",
          Component: CountryRoute
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}
