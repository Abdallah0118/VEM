import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./componants/Layout";
import ErrorPage from "./componants/ErrorPage";
import About from "./componants/About";
import Projects from "./componants/Projects";
import Contact from "./componants/Contact";
import Home from "./componants/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Projects", element: <Projects /> },
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
