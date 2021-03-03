import React from "react";

interface IProps {
  title: string;
}

const CardTitle: React.FC<IProps> = ({ title }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

export default CardTitle;
