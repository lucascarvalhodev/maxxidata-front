import React from "react";
import { useAuth } from "../contexts/AuthContext";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";

const Routes: React.FC = () => {
  const { signed } = useAuth();

  if (signed) {
    return <AppRoutes />;
  }

  return <AuthRoutes />;
};

export default Routes;
