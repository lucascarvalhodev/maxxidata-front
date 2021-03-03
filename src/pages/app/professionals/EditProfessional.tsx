import { FormikHelpers } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import { IProfessional } from "../../../alias/IProfessional";
import { ITypeOfProfessional } from "../../../alias/ITypeOfProfessional";
import Button from "../../../components/Button";
import FormProfessional from "../../../components/form/FormProfessional";
import { AppRouteName } from "../../../routes/AppRouteName";
import {
  editProfessional as eP,
  getProfessional,
} from "../../../services/professionals";
import { getTypeOfProfessionals } from "../../../services/typeOfProfessionals";

interface IParams {
  id: string;
}

const EditProfessional: React.FC = () => {
  const { id } = useParams<IParams>();
  const history = useHistory();
  const [professinal, setProfessional] = useState<IProfessional | undefined>();
  const [typeOfProfessionals, setTypeOfProfessionals] = useState<
    ITypeOfProfessional[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState("");

  function edit(value: IProfessional, action: FormikHelpers<IProfessional>) {
    setLoading(true);
    eP(id, value)
      .then((res) => {
        action.resetForm();
        history.push(`${AppRouteName.SHOW_PROFESSIONAL}/${id}`);
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
    getProfessional(id).then((res) => {
      setProfessional(res.data);
    });
    getTypeOfProfessionals().then((res) => {
      setTypeOfProfessionals(res.data);
    });
  }

  useEffect(init, [id]);

  if (!professinal || !typeOfProfessionals) {
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
        <div className="title mb-3">Edit Professional</div>
        {alert && <div className="alert alert-primary">{alert}</div>}
        <FormProfessional
          loading={loading}
          onSubmit={edit}
          initialValues={professinal}
          typeOfProfessionals={typeOfProfessionals}
        />
        <Button onClick={back} className="btn-block">
          Back
        </Button>
      </div>
    </div>
  );
};

export default EditProfessional;
