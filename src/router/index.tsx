import {Layout} from "@/views/Layout";
import {Login} from "@/views/Login/index";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>
  },
  {
    path: '/login',
    element: <Login/>
  }
])

export default router
