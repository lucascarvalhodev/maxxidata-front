import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

const AppPanel: React.FC = ({ children }) => {
  const BRAND = process.env.REACT_APP_BRAND;

  return (
    <div className="w-100 vh-100 bg-default">
      <Header brand={BRAND} />
      <div
        className="container my-3"
        style={{ minHeight: "calc(100vh - 140px)" }}
      >
        {children}
      </div>
      <Footer brand={BRAND} />
    </div>
  );
};

export default AppPanel;
