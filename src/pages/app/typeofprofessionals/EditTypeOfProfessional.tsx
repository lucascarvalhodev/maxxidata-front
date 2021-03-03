import { FormikHelpers } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import { ITypeOfProfessional } from "../../../alias/ITypeOfProfessional";
import Button from "../../../components/Button";
import FormTypeOfProfessional from "../../../components/form/FormTypeOfProfessional";
import { AppRouteName } from "../../../routes/AppRouteName";
import {
  editTypeOfProfessional as eT,
  getTypeOfProfessional,
} from "../../../services/typeOfProfessionals";

interface IParams {
  id: string;
}

const EditTypeOfProfessional: React.FC = () => {
  const { id } = useParams<IParams>();
  const history = useHistory();
  const [typeOfProfessional, setTypeOfProfessional] = useState<
    ITypeOfProfessional | undefined
  >();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState("");

  function edit(
    value: ITypeOfProfessional,
    action: FormikHelpers<ITypeOfProfessional>
  ) {
    setLoading(true);
    eT(id, value)
      .then((res) => {
        action.resetForm();
        history.push(`${AppRouteName.SHOW_TYPE_OF_PROFESSIONAL}/${id}`);
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
    getTypeOfProfessional(id).then((res) => {
      setTypeOfProfessional(res.data);
    });
  }

  useEffect(init, [id]);

  if (!typeOfProfessional) {
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
        <div className="title mb-3">Edit Profission</div>
        {alert && <div className="alert alert-primary">{alert}</div>}
        <FormTypeOfProfessional
          loading={loading}
          onSubmit={edit}
          initialValues={typeOfProfessional}
        />
        <Button onClick={back} className="btn-block">
          Back
        </Button>
      </div>
    </div>
  );
};

export default EditTypeOfProfessional;
