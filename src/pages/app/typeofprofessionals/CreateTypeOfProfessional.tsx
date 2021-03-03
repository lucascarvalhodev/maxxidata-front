import { FormikHelpers } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ITypeOfProfessional } from "../../../alias/ITypeOfProfessional";
import Button from "../../../components/Button";
import FormTypeOfProfessional from "../../../components/form/FormTypeOfProfessional";
import { AppRouteName } from "../../../routes/AppRouteName";
import { createTypeOfProfessional } from "../../../services/typeOfProfessionals";

const CreateTypeOfProfessional: React.FC = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState("");

  function save(
    value: ITypeOfProfessional,
    action: FormikHelpers<ITypeOfProfessional>
  ) {
    setLoading(true);
    createTypeOfProfessional(value)
      .then((res) => {
        action.resetForm();
        history.push(
          `${AppRouteName.SHOW_TYPE_OF_PROFESSIONAL}/${res.data.id}`
        );
      })
      .catch((err) => {
        setAlert(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function back() {
    history.goBack();
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="title mb-3">Create Profission</div>
        {alert && <div className="alert alert-primary">{alert}</div>}
        <FormTypeOfProfessional loading={loading} onSubmit={save} />
        <Button onClick={back} className="btn-block">
          Back
        </Button>
      </div>
    </div>
  );
};

export default CreateTypeOfProfessional;
