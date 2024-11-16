import { createBrowserRouter } from "react-router-dom"

import {
  Home,
  Projects,
  Project,
  NotFound,
} from "./pages/"

import { Layout } from "./Layout"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/project/:id",
        element: <Project />
      }
    ],
  },
])

