import Layout from "@/views/Layout";
import Login from "@/views/Login/index";
import Home from "@/views/Home"
import Article from "@/views/Layout/modules/Article";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRouter";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute><Layout/></AuthRoute>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'article',
        element: <Article/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  }
])

export default router
