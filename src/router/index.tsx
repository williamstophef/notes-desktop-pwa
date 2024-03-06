/** Vendors */
import { createBrowserRouter } from "react-router-dom";

/** Custom components */
import Home from "../components/notes/views/Home";
import NotesTemplate from "../components/shared/layout/Template";

const router = createBrowserRouter([
  {
    element: <NotesTemplate />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
