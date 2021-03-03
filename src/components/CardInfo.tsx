import React from "react";

interface IProps {
  title?: string;
  description?: string;
  loading?: boolean;
}

const CardInfo: React.FC<IProps> = ({ title, description, loading }) => {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <label className="text-center">{title}</label>
        <strong className="text-primary">
          {loading ? "---" : description}
        </strong>
      </div>
    </div>
  );
};

export default CardInfo;
