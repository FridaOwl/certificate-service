import React from "react";
import "./CustomInput.sass";

interface CustomInputProps {
  type: string;
  className: string;
  touched: boolean;
  error: string;
  [key: string]: any;
}

const CustomInput: React.FC<CustomInputProps> = ({
  touched,
  error,
  type,
  children,
  ...props
}) => (
  <div className="inputContainer">
    {type === "select" ? (
      <select {...props} className="customInput">
        {children}
      </select>
    ) : type === "radio" ? (
      <>
        <input {...props} type="radio" className="customInput" />
        {children}
      </>
    ) : (
      <input {...props} type={type} className="customInput" />
    )}
    {touched && error && <span className="error">{error}</span>}
  </div>
);

export default CustomInput;
