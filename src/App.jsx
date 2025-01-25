import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home"
import Products from "./pages/Products"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import ErrorPage from "./pages/ErrorPage"

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'products',
          element: <Products/>
        },
        {
          path: 'about',
          element: <AboutUs/>
        },
        {
          path: 'contact',
          element: <ContactUs/>
        }
      ]
    }
  ]);
  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}
