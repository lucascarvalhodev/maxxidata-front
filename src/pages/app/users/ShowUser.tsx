import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { useHistory } from "react-router-dom";
import { AppRouteName } from "../../../routes/AppRouteName";
import { me } from "../../../services/auth";
import { IUser } from "../../../alias/IUser";
import { Spinner } from "reactstrap";

const ShowUser: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<IUser | undefined>();

  function back() {
    history.push(AppRouteName.HOME);
  }

  function init() {
    me().then((res) => {
      setUser(res.data);
    });
  }

  useEffect(init, []);

  if (!user) {
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
        <div className="title mb-3">Details User</div>
        <div>
          Id: <strong>{user.id}</strong>
        </div>
        <div>
          Name: <strong>{user.name}</strong>
        </div>
        <div>
          E-mail: <strong>{user.email}</strong>
        </div>
        <div className="mt-3">
          <Button className="btn-block" onClick={back}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShowUser;
