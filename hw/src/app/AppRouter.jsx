
import HomeRoute from "../routes/HomeRoute";
import CountryRoute from "../routes/CountryRoute";
import {CountryLoader} from "../routes/CountryRoute/CountryLoader";
import {HomeLoader} from "../routes/HomeRoute/HomeLoader";
import RootLayout from "../layouts/RootLayout";
import {createBrowserRouter} from "react-router";

const AppRouter = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: HomeRoute,
          loader: HomeLoader
        },
        {
          path: "countries/:code",
          Component: CountryRoute,
          loader: CountryLoader,
        }
      ]
    }
  ]);

  export default AppRouter;