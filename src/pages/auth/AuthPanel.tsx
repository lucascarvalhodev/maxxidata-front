import React from "react";

import Footer from "../../components/Footer";

const AuthPanel: React.FC = ({ children }) => {
  const BRAND = process.env.REACT_APP_BRAND;

  return (
    <div className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center bg-primary">
      <div className="card" style={{ width: 410 }}>
        <div className="card-body p-5">{children}</div>
      </div>
      <Footer brand={BRAND} className="text-white mt-5" />
    </div>
  );
};

export default AuthPanel;
