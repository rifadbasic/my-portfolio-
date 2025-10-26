import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import About from "../components/About";
import Project from "../components/projects/Project";
import Skill from "../components/Skill";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project",
        element: <Project/>,
      },
      {
        path: "/skill",
        element : <Skill/>
      },
    ],
  },
]);
export default router;
