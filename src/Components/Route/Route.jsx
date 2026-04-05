import { createBrowserRouter } from "react-router";
import MainLayout from "../../Layout/MainLayout.jsx";
import Hompage from "../Homepage/Hompage.jsx";
import Books from "../Homepage/Books/Books.jsx";
import FetchError from "../ErrorFEtch/ErrorFetch.jsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Hompage></Hompage>
      },
      {
        path: '/books',
        element: <Books></Books>
      }
    ],
    errorElement: <FetchError></FetchError>
  }
])
