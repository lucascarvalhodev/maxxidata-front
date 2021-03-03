import React, { useEffect, useState } from "react";
import CardInfo from "../../components/CardInfo";
import TableTypeOfProfessional from "../../components/TableTypeOfProfessional";
import TableProfessional from "../../components/TableProfessional";
import CardTitle from "../../components/CardTitle";
import { IProfessional } from "../../alias/IProfessional";
import { ITypeOfProfessional } from "../../alias/ITypeOfProfessional";
import { getProfessionals } from "../../services/professionals";
import { getTypeOfProfessionals } from "../../services/typeOfProfessionals";
import { getDashboardData } from "./../../services/home";
import { IDashboardData } from "../../alias/IDashboardData";

const Home: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<
    IDashboardData | undefined
  >();
  const [professionals, setProfessionals] = useState<IProfessional[]>([]);
  const [typeOfProfessionals, setTypeOfProfessionals] = useState<
    ITypeOfProfessional[]
  >([]);

  const [loadingdashboardData, setLoadingdashboardData] = useState(false);
  const [loadingProfessionals, setLoadingProfessionals] = useState(false);
  const [loadingTypeOfProfessionals, setLoadingTypeOfProfessionals] = useState(
    false
  );

  function init() {
    setLoadingdashboardData(true);
    getDashboardData().then((res) => {
      setDashboardData(res.data);
      setLoadingdashboardData(false);
    });

    setLoadingProfessionals(true);
    getProfessionals().then((res) => {
      setProfessionals(res.data);
      setLoadingProfessionals(false);
    });

    setLoadingTypeOfProfessionals(true);
    getTypeOfProfessionals().then((res) => {
      setLoadingTypeOfProfessionals(false);
      setTypeOfProfessionals(res.data);
    });
  }

  useEffect(init, []);

  return (
    <div>
      <div className="row mb-4">
        <div className="col-12">
          <CardTitle title="Home" />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12 col-sm-6 col-md-3 mb-3 mb-md-0">
          <CardInfo
            title="Number of professionals"
            description={dashboardData?.professionalCount}
            loading={loadingdashboardData}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mb-3 mb-md-0">
          <CardInfo
            title="Amount of kind of professionals"
            description={dashboardData?.tyepOfProfessionalCount}
            loading={loadingdashboardData}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mb-3 mb-sm-0">
          <CardInfo
            title="Last registered professionals"
            description={dashboardData?.lastRegisteredProfessional?.name}
            loading={loadingdashboardData}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mb-0">
          <CardInfo
            title="Last registered type of professional"
            description={
              dashboardData?.lastRegisteredTyepOfProfessional?.description
            }
            loading={loadingdashboardData}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8 mb-4 mb-md-0">
          <TableProfessional
            professionals={professionals}
            loading={loadingProfessionals}
          />
        </div>
        <div className="col-12 col-md-4">
          <TableTypeOfProfessional
            typeOfProfessionals={typeOfProfessionals}
            loading={loadingTypeOfProfessionals}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
