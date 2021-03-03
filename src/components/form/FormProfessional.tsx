import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import { ITypeOfProfessional } from "../../alias/ITypeOfProfessional";
import { IProfessional } from "../../alias/IProfessional";

const schema = Yup.object().shape({
  name: Yup.string().min(4).max(150).required(),
  email: Yup.string().email().min(4).max(150).required(),
  telephone: Yup.string().min(10).max(25).required(),
  typeOfProfessionalId: Yup.string().required(),
  situation: Yup.boolean(),
});

interface IPD extends IProfessional {
  typeOfProfessionalId?: string;
  situationString?: string;
}

interface IProps {
  onSubmit(value: IPD, action: FormikHelpers<IPD>): void;
  loading: boolean;
  initialValues?: IProfessional;
  typeOfProfessionals: ITypeOfProfessional[];
}

const defaultValues: IPD = {
  name: "",
  email: "",
  telephone: "",
  typeOfProfessional: {} as ITypeOfProfessional,
  typeOfProfessionalId: "",
  situationString: "inactive",
  situation: false,
};

const FormProfessional: React.FC<IProps> = ({
  onSubmit,
  loading,
  initialValues = defaultValues,
  typeOfProfessionals,
}) => {
  const data = {
    ...initialValues,
    typeOfProfessionalId: initialValues.typeOfProfessional.id,
    situationString: initialValues.situation ? "active" : "inactive",
  } as IPD;

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={(values, action: FormikHelpers<IPD>) => {
        const topData = typeOfProfessionals.find(
          (top) => top.id === values.typeOfProfessionalId
        );

        if (topData) values.typeOfProfessional = topData;

        values.situation = values.situationString === "active" ? true : false;

        delete values.typeOfProfessionalId;
        delete values.situationString;

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
          <label htmlFor="emailInput">Telephone</label>
          <Field
            name="telephone"
            data-testid="telephone"
            type="text"
            className="form-control"
            id="emailInput"
            placeholder="Enter telephone"
          />
          <small className="form-text text-danger">
            <ErrorMessage name="telephone" />
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="typeOfProfessionalSelect">Type Of Professional</label>
          <Field
            as="select"
            name="typeOfProfessionalId"
            data-testid="typeOfProfessionalId"
            className="form-control"
            id="typeOfProfessionalSelect"
          >
            <option value={undefined}>select a profession type</option>
            {typeOfProfessionals
              .filter((top) => top.situation)
              .map((top) => (
                <option key={top.id} value={top.id}>
                  {top.description}
                </option>
              ))}
          </Field>
          <small className="form-text text-danger">
            <ErrorMessage name="typeOfProfessionalId" />
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="situationSelect">Situation</label>
          <Field
            as="select"
            name="situationString"
            data-testid="situationString"
            className="form-control"
            id="situationSelect"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Field>
          <small className="form-text text-danger">
            <ErrorMessage name="situationString" />
          </small>
        </div>

        <Button type="submit" loading={loading} className="btn-block mt-4 mb-3">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default FormProfessional;
