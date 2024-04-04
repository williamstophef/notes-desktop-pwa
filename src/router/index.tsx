/** Vendors */
import { createBrowserRouter } from "react-router-dom";

/** Custom components */
import Categories from "../components/notes/views/Categories";
import Notes from "../components/notes/views/Notes";
import Template from "../components/shared/layout/Template";

const router = createBrowserRouter([
  {
    element: <Template />,
    path: "/",
    children: [
      {
        index: true,
        element: <Notes />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
    ],
  },
]);

export default router;
