import { createBrowserRouter } from "react-router";
import MainLayout from "../../Layout/MainLayout.jsx";
import Hompage from "../Homepage/Hompage.jsx";
import Books from "../ListedBooks/Books.jsx";
import FetchError from "../ErrorFEtch/ErrorFetch.jsx";
import BookDetails from "../BookDetails/BookDetails.jsx";

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
      },
      {
        path: '/booksDetails/:id',
        element: <BookDetails></BookDetails>,
        loader: ()=>fetch('/booksData.json').then(res => res.json())
      }
    ],
    errorElement: <FetchError></FetchError>
  }
])
