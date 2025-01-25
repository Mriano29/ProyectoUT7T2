import './App.css'
import 'regenerator-runtime/runtime';
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
          path: 'productos',
          element: <Products/>
        },
        {
          path: 'información',
          element: <AboutUs/>
        },
        {
          path: 'contacto',
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
