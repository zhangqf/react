import Layout from "@/views/Layout";
import Login from "@/views/Login/index";

import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRouter";
const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute><Layout/></AuthRoute>
  },
  {
    path: '/login',
    element: <Login/>
  }
])

export default router
