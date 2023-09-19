import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "./Pages/Home";
import { Root } from "./Pages/Root";
import { ProjectsPage } from "./Pages/Projects";
import { AboutPage } from "./Pages/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

export default Router;
