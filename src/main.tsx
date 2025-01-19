import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import App from './App.jsx'
import HomePage from "./pages/HomePage";
import ListPage from "./pages/TestListPage";
import ListsPage from "./pages/TestListsPage";
import NotFoundPage from "./pages/NotFoundPage";

import './main.css'

const rootElement = document.getElementById("root")
if (!rootElement) {
  throw new Error("Root element not found")
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/list",
    element: <ListPage />,
  },
  {
    path: "/lists",
    element: <ListsPage />,
    children :   [
      {
        path: '/lists/:listId',
        element: <ListPage />,
      },
    ],
  },

]);

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
