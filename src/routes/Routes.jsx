import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Contact from "../components/Others/Contact/Contact";
import About from "../components/Others/About/About";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../components/Home/Home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },
    ],
  },
]);

export default router;
