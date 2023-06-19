import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./componants/Layout";
import ErrorPage from "./componants/ErrorPage";
import About from "./componants/About";
import Projects from "./componants/Projects";
import Contact from "./componants/Contact";
import Home from "./componants/Home";
import SignIn from "./componants/SignIn";
import SignUp from "./componants/SignUp";
import Profile from "./componants/Profile";
import ProfileEdit from "./componants/ProfileEdit";
import Home1 from "./componants/amr";
// import Home1 from "./componants/amr";

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
      { path: "/Home", element: <Home1 /> },
      { path: "/profile", element: <Profile/> },
      { path: "/profile/edit", element: <ProfileEdit/> },
      
    ],
  },
  { path: "/Signin", element: <SignIn /> },
  { path: "/Signup", element: <SignUp /> },
 

]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
