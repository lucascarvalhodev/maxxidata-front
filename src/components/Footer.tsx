import React from "react";

interface IProps {
  brand: string | undefined;
  className?: string;
}

const Footer: React.FC<IProps> = ({ brand, className = "text-primary" }) => {
  return (
    <div className="w-100 py-3 d-flex justify-content-center align-items-center">
      <div className={className}>All rights reserved to ©{brand}</div>
    </div>
  );
};

export default Footer;
