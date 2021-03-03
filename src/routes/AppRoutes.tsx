import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Spinner } from "reactstrap";
import AppPanel from "./../pages/app/AppPanel";
import { AppRouteName } from "./AppRouteName";

const Home = lazy(() => import("../pages/app/Home"));
const ShowUser = lazy(() => import("../pages/app/users/ShowUser"));

const ShowProfessional = lazy(
  () => import("../pages/app/professionals/ShowProfessional")
);
const EditProfessional = lazy(
  () => import("../pages/app/professionals/EditProfessional")
);
const CreateProfessional = lazy(
  () => import("../pages/app/professionals/CreateProfessional")
);

const ShowTypeOfProfessional = lazy(
  () => import("../pages/app/typeofprofessionals/ShowTypeOfProfessional")
);
const EditTypeOfProfessional = lazy(
  () => import("../pages/app/typeofprofessionals/EditTypeOfProfessional")
);
const CreateTypeOfProfessional = lazy(
  () => import("../pages/app/typeofprofessionals/CreateTypeOfProfessional")
);

const AppRoutes: React.FC = () => {
  return (
    <AppPanel>
      <Suspense
        fallback={
          <div className="w-100 d-flex justify-content-center align-items-center">
            <Spinner color="primary" />
          </div>
        }
      >
        <Switch>
          <Route path={AppRouteName.HOME} exact component={Home} />
          <Route path={AppRouteName.SHOW_USER} exact component={ShowUser} />

          <Route
            path={AppRouteName.SHOW_PROFESSIONAL + "/:id"}
            exact
            component={ShowProfessional}
          />
          <Route
            path={AppRouteName.EDIT_PROFESSIONAL + "/:id"}
            exact
            component={EditProfessional}
          />
          <Route
            path={AppRouteName.CREATE_PROFESSIONAL}
            exact
            component={CreateProfessional}
          />

          <Route
            path={AppRouteName.SHOW_TYPE_OF_PROFESSIONAL + "/:id"}
            exact
            component={ShowTypeOfProfessional}
          />
          <Route
            path={AppRouteName.EDIT_TYPE_OF_PROFESSIONAL + "/:id"}
            exact
            component={EditTypeOfProfessional}
          />
          <Route
            path={AppRouteName.CREATE_TYPE_OF_PROFESSIONAL}
            exact
            component={CreateTypeOfProfessional}
          />

          <Redirect to={AppRouteName.HOME} />
        </Switch>
      </Suspense>
    </AppPanel>
  );
};

export default AppRoutes;
