import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Spinner } from "reactstrap";
import AuthPanel from "../pages/auth/AuthPanel";
import { AuthRouteName } from "./AuthRouteName";

const SignIn = lazy(() => import("../pages/auth/signIn/SignIn"));
const Register = lazy(() => import("../pages/auth/register/Register"));

const AuthRoutes: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center bg-primary">
          <Spinner color="white" />
        </div>
      }
    >
      <AuthPanel>
        <Switch>
          <Route path={AuthRouteName.SIGN_IN} exact component={SignIn} />
          <Route path={AuthRouteName.REGISTER} component={Register} />
          <Redirect to={AuthRouteName.SIGN_IN} />
        </Switch>
      </AuthPanel>
    </Suspense>
  );
};

export default AuthRoutes;
