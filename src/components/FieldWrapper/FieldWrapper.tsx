import React from "react";
import { Field } from "react-final-form";
import CustomInput from "../CustomInput/CustomInput";

interface FieldWrapperProps {
  name: string;
  type: string;
  className: string;
  children?: React.ReactNode;
  placeholder?: string;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({
  name,
  type,
  className,
  children,
  placeholder,
}) => (
  <Field name={name}>
    {({ input, meta }) => (
      <CustomInput
        {...input}
        type={type}
        className={className}
        touched={!!meta.touched}
        error={meta.error ? meta.error : ""}
        placeholder={placeholder}
      >
        {children}
      </CustomInput>
    )}
  </Field>
);

export default FieldWrapper;
