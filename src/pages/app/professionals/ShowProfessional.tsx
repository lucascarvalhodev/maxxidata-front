import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { useHistory, useParams } from "react-router-dom";
import { AppRouteName } from "../../../routes/AppRouteName";
import { IProfessional } from "../../../alias/IProfessional";
import {
  deleteProfessional,
  getProfessional,
} from "../../../services/professionals";
import { Spinner } from "reactstrap";

interface IParams {
  id: string;
}

const ShowProfessional: React.FC = () => {
  const { id } = useParams<IParams>();
  const history = useHistory();
  const [professinal, setProfessional] = useState<IProfessional | undefined>();
  const [loading, setLoading] = useState(false);

  function edit() {
    history.push(`${AppRouteName.EDIT_PROFESSIONAL}/${id}`);
  }

  function remove() {
    setLoading(true);
    deleteProfessional(id).then((res) => {
      history.push(AppRouteName.HOME);
      setLoading(false);
    });
  }

  function back() {
    history.push(AppRouteName.HOME);
  }

  function init() {
    getProfessional(id).then((res) => {
      setProfessional(res.data);
    });
  }

  useEffect(init, [id]);

  if (!professinal) {
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
        <div className="title mb-3">Details Professional</div>
        <div>
          Id: <strong>{professinal.id}</strong>
        </div>
        <div>
          Name: <strong>{professinal.name}</strong>
        </div>
        <div>
          Telephone: <strong>{professinal.telephone}</strong>
        </div>
        <div>
          E-mail: <strong>{professinal.email}</strong>
        </div>
        <div>
          Type Of Professional:{" "}
          <strong>{professinal.typeOfProfessional.description}</strong>
        </div>
        <div>
          Situation:{" "}
          <strong>{professinal.situation ? "Active" : "Inactive"}</strong>
        </div>
        <div>
          Created At: <strong>{professinal.createdAt}</strong>
        </div>
        <div>
          Updated At: <strong>{professinal.updatedAt}</strong>
        </div>
        <div className="mt-3">
          <Button onClick={edit} className="mb-3 btn-block">
            Edit
          </Button>
          <Button onClick={remove} loading={loading} className="mb-3 btn-block">
            Delete
          </Button>
          <Button className="btn-block" onClick={back}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShowProfessional;
