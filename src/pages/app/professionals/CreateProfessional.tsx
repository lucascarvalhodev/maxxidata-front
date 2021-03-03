import { FormikHelpers } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Spinner } from "reactstrap";
import { IProfessional } from "../../../alias/IProfessional";
import { ITypeOfProfessional } from "../../../alias/ITypeOfProfessional";
import Button from "../../../components/Button";
import FormProfessional from "../../../components/form/FormProfessional";
import { AppRouteName } from "../../../routes/AppRouteName";
import { createProfessional } from "../../../services/professionals";
import { getTypeOfProfessionals } from "../../../services/typeOfProfessionals";

const CreateProfessional: React.FC = () => {
  const history = useHistory();
  const [typeOfProfessionals, setTypeOfProfessionals] = useState<
    ITypeOfProfessional[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [alert, setAlert] = useState("");

  function save(value: IProfessional, action: FormikHelpers<IProfessional>) {
    setLoading(true);
    createProfessional(value)
      .then((res) => {
        action.resetForm();
        history.push(`${AppRouteName.SHOW_PROFESSIONAL}/${res.data.id}`);
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

  function init() {
    setLoadingData(true);
    getTypeOfProfessionals().then((res) => {
      setLoadingData(false);
      setTypeOfProfessionals(res.data);
    });
  }

  useEffect(init, []);

  if (loadingData) {
    return (
      <div className="card">
        <div className="card-body">
          <div className="w-100 d-flex justify-content-center align-items-center">
            <Spinner color="primary" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="title mb-3">Create Professional</div>
        {alert && <div className="alert alert-primary">{alert}</div>}
        <FormProfessional
          loading={loading}
          onSubmit={save}
          typeOfProfessionals={typeOfProfessionals}
        />
        <Button onClick={back} className="btn-block">
          Back
        </Button>
      </div>
    </div>
  );
};

export default CreateProfessional;
