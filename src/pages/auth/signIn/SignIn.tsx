import { FormikHelpers } from "formik";
import React, { useState } from "react";
import { IUser } from "../../../alias/IUser";
import { useAuth } from "../../../contexts/AuthContext";
import FormSignIn from "../../../components/form/FormSignIn";
import { Link } from "react-router-dom";
import { AuthRouteName } from "../../../routes/AuthRouteName";
import { me, signIn } from "../../../services/auth";
import { setTokenAuthorization } from "../../../helpers/authToken";

const SignIn: React.FC = () => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState("");

  function login(value: IUser, action: FormikHelpers<IUser>) {
    setLoading(true);
    signIn(value)
      .then((res) => {
        setTokenAuthorization(res.data.token);
        me()
          .then((res) => {
            action.resetForm();
            setUser(res.data);
          })
          .finally(() => {
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setAlert(err.response.data.message);
        setLoading(false);
      });
  }

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="mb-2">
          Welcome to <span className="text-primary">GoPress</span>
        </div>
        <div className="h4 mb-3">Sign In</div>
      </div>
      {alert && <div className="alert alert-primary">{alert}</div>}
      <FormSignIn onSubmit={login} loading={loading} />
      <Link to={AuthRouteName.REGISTER} className="btn btn-white btn-block">
        <div className="text-primary">Register</div>
      </Link>
    </>
  );
};

export default SignIn;
