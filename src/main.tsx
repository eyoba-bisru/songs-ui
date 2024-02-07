import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Create } from "./Create.tsx";
import { Edit } from "./Edit.tsx";
import { Statistics } from "./Statistics.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "statistics",
    element: <Statistics />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
