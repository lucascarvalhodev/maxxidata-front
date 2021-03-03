import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { useHistory, useParams } from "react-router-dom";
import { AppRouteName } from "../../../routes/AppRouteName";
import { ITypeOfProfessional } from "../../../alias/ITypeOfProfessional";
import { Spinner } from "reactstrap";
import {
  deleteTypeOfProfessional,
  getTypeOfProfessional,
} from "../../../services/typeOfProfessionals";

interface IParams {
  id: string;
}

const ShowTypeOfProfessional: React.FC = () => {
  const { id } = useParams<IParams>();
  const history = useHistory();
  const [typeOfProfessional, setTypeOfProfessional] = useState<
    ITypeOfProfessional | undefined
  >();
  const [loading, setLoading] = useState(false);

  function remove() {
    setLoading(true);
    deleteTypeOfProfessional(id).then((res) => {
      history.push(AppRouteName.HOME);
      setLoading(false);
    });
  }

  function edit() {
    history.push(`${AppRouteName.EDIT_TYPE_OF_PROFESSIONAL}/${id}`);
  }

  function back() {
    history.push(AppRouteName.HOME);
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
        <div className="title mb-3">Details Profission</div>
        <div>
          Id: <strong>{id}</strong>
        </div>
        <div>
          Description: <strong>{typeOfProfessional.description}</strong>
        </div>
        <div>
          Situation:{" "}
          <strong>
            {typeOfProfessional.situation ? "Active" : "Inactive"}
          </strong>
        </div>
        <div>
          Created At: <strong>{typeOfProfessional.createdAt}</strong>
        </div>
        <div>
          Updated At: <strong>{typeOfProfessional.updatedAt}</strong>
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

export default ShowTypeOfProfessional;
