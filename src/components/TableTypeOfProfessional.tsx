import React from "react";
import { ITypeOfProfessional } from "../alias/ITypeOfProfessional";
import { AppRouteName } from "../routes/AppRouteName";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import { Spinner } from "reactstrap";

interface IProps {
  typeOfProfessionals: ITypeOfProfessional[];
  loading?: boolean;
}

const TableTypeOfProfessional: React.FC<IProps> = ({
  typeOfProfessionals,
  loading,
}) => {
  const history = useHistory();

  function show(id: string | undefined) {
    history.push(`${AppRouteName.SHOW_TYPE_OF_PROFESSIONAL}/${id}`);
  }

  function create() {
    history.push(AppRouteName.CREATE_TYPE_OF_PROFESSIONAL);
  }

  if (loading) {
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
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-content-center">
          <div className="title">Type of professionals</div>
          <Button className="btn-sm mt-2 mt-lg-0" onClick={create}>
            New type
          </Button>
        </div>
        <div className="table-responsive">
          <table
            className={`table table-sm table-borderless ${
              typeOfProfessionals.length !== 0 ? "table-hover" : ""
            } mt-3`}
          >
            {typeOfProfessionals.length === 0 ? (
              <tbody>
                <tr>
                  <td className="text-center" colSpan={1}>
                    no registry
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="tbody-selected-items-text-primary">
                {typeOfProfessionals.map((typeOfProfessional) => (
                  <tr
                    key={typeOfProfessional.id}
                    onClick={() => show(typeOfProfessional.id)}
                  >
                    <td>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>#{typeOfProfessional.description}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableTypeOfProfessional;
