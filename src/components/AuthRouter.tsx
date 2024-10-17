import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";
import React, { ReactNode } from 'react';

interface AuthRouteProps {
  children: ReactNode;
}

export const AuthRoute:React.FC<AuthRouteProps>=({children}) =>{
  const token = getToken()
  if(token) {
    return <>{children}</>;
  } else {
    return <Navigate to={'/login'}  replace/>
  }
}