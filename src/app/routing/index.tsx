import { App } from "app/App";
import { createBrowserRouter } from "react-router";
import TasksPage from "pages/tasks";
import RegistrationPage from "pages/registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <div>Hello</div>,
      },
      {
        path: "tasklist",
        element: <TasksPage />,
      },
      {
        path: "registration",
        element: <RegistrationPage />,
      },
    ],
  },
]);
