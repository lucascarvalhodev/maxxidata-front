import { FormikHelpers } from "formik";
import React, { useState } from "react";
import { IUser } from "../../../alias/IUser";
import FormUser from "../../../components/form/FormUser";
import { Link } from "react-router-dom";
import { AuthRouteName } from "../../../routes/AuthRouteName";
import { signUp } from "./../../../services/auth";

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState("");

  function Register(value: IUser, action: FormikHelpers<IUser>) {
    setLoading(true);
    value.passwordConfirmation = value.password;
    signUp(value)
      .then((res) => {
        setAlert("Cadastro realizado com sucesso!");
        action.resetForm();
      })
      .catch((err) => {
        setAlert(err.response.data.message);
      })
      .finally(() => setLoading(false));
  }

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="mb-2">Make your registration</div>
        <div className="h4 mb-3">Register</div>
      </div>
      {alert && <div className="alert alert-primary">{alert}</div>}
      <FormUser loading={loading} onSubmit={Register} />
      <Link to={AuthRouteName.SIGN_IN} className="btn btn-white btn-block">
        <div className="text-primary">Sign In</div>
      </Link>
    </>
  );
};

export default Register;
