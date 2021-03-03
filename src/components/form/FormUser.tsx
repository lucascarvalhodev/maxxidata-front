import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import { IUser } from "../../alias/IUser";

const schema = Yup.object().shape({
  name: Yup.string().min(4).max(150).required(),
  email: Yup.string().email().min(4).max(150).required(),
  password: Yup.string().min(4).max(150).required(),
});

const schemaNoPass = Yup.object().shape({
  name: Yup.string().min(4).max(150).required(),
  email: Yup.string().email().min(4).max(150).required(),
  password: Yup.string().min(4).max(150),
});

interface IProps {
  onSubmit(value: IUser, action: FormikHelpers<IUser>): void;
  loading: boolean;
  initialValues?: IUser;
  optionalPassword?: boolean;
}

const defaultValues: IUser = {
  name: "",
  email: "",
  password: "",
};

const FormUser: React.FC<IProps> = ({
  onSubmit,
  loading,
  initialValues = defaultValues,
  optionalPassword = false,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={optionalPassword ? schemaNoPass : schema}
      onSubmit={(values, action: FormikHelpers<IUser>) => {
        onSubmit(values, action);
      }}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <Field
            name="name"
            data-testid="name"
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Enter name"
          />
          <small className="form-text text-danger">
            <ErrorMessage name="name" />
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <Field
            name="email"
            data-testid="email"
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Enter email"
          />
          <small className="form-text text-danger">
            <ErrorMessage name="email" />
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <Field
            name="password"
            data-testid="password"
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Enter password"
          />
          <small className="form-text text-danger">
            <ErrorMessage name="password" />
          </small>
        </div>
        <Button type="submit" loading={loading} className="btn-block mt-4 mb-3">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default FormUser;
