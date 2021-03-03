import React from "react";
import { Spinner } from "reactstrap";

interface IProps {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<IProps> = ({
  type = "button",
  className,
  onClick,
  loading = false,
  children,
  disabled = false,
}) => {
  function Action() {
    if (!loading && onClick) {
      onClick();
    }
  }
  return (
    <button
      type={type}
      className={"btn btn-primary " + className}
      onClick={Action}
      disabled={loading || disabled}
    >
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: 20 }}
        >
          <Spinner color="white" size="sm" />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </button>
  );
};

export default Button;
