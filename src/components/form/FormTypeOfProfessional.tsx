import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import { ITypeOfProfessional } from "../../alias/ITypeOfProfessional";

const schema = Yup.object().shape({
  description: Yup.string().min(4).max(150).required(),
  situation: Yup.boolean(),
});

interface ITPD extends ITypeOfProfessional {
  situationString?: string;
}

interface IProps {
  onSubmit(value: ITPD, action: FormikHelpers<ITPD>): void;
  loading: boolean;
  initialValues?: ITPD;
}

const defaultValues: ITPD = {
  description: "",
  situation: false,
  situationString: "inactive",
};

const FormTypeOfProfessional: React.FC<IProps> = ({
  onSubmit,
  loading,
  initialValues = defaultValues,
}) => {
  const data = {
    ...initialValues,
    situationString: initialValues.situation ? "active" : "inactive",
  } as ITPD;

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={(values, action: FormikHelpers<ITPD>) => {
        values.situation = values.situationString === "active" ? true : false;
        delete values.situationString;
        onSubmit(values, action);
      }}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="descriptionInput">Description</label>
          <Field
            name="description"
            data-testid="description"
            type="text"
            className="form-control"
            id="descriptionInput"
            placeholder="Enter description"
          />
          <small className="form-text text-danger">
            <ErrorMessage name="description" />
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

export default FormTypeOfProfessional;
