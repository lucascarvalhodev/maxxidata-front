import React from "react";
import { IProfessional } from "../alias/IProfessional";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import { AppRouteName } from "../routes/AppRouteName";
import { Spinner } from "reactstrap";

interface IProps {
  professionals: IProfessional[];
  loading?: boolean;
}

const TableProfessional: React.FC<IProps> = ({ professionals, loading }) => {
  const history = useHistory();

  function show(id: string | undefined) {
    history.push(`${AppRouteName.SHOW_PROFESSIONAL}/${id}`);
  }

  function create() {
    history.push(AppRouteName.CREATE_PROFESSIONAL);
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
          <div className="title">Professionals</div>
          <Button className="btn-sm mt-2 mt-lg-0" onClick={create}>
            New professional
          </Button>
        </div>
        <div className="table-responsive">
          <table
            className={`table table-sm table-borderless ${
              professionals.length !== 0 ? "table-hover" : ""
            } mt-3`}
          >
            {professionals.length === 0 ? (
              <tbody>
                <tr>
                  <td className="text-center" colSpan={3}>
                    no registry
                  </td>
                </tr>
              </tbody>
            ) : (
              <>
                <thead>
                  <tr className="strong text-primary">
                    <td>#</td>
                    <td>Name</td>
                    <td className="d-none d-md-table-cell">E-mail</td>
                  </tr>
                </thead>
                <tbody className="tbody-selected-items">
                  {professionals.map((professional, i) => (
                    <tr
                      key={professional.id}
                      onClick={() => show(professional.id)}
                    >
                      <td>{i + 1}</td>
                      <td>{professional.name}</td>
                      <td className="d-none d-md-table-cell">
                        {professional.email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableProfessional;
