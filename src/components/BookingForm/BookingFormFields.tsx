import React from "react";
import { useTranslation } from "react-i18next";
import { Form } from "react-final-form";
import "./BookingFormFields.sass";

interface BookingFormFieldsProps {
  onSubmit: (values: any) => void;
}

const BookingFormFields: React.FC<BookingFormFieldsProps> = ({ onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="formContainer">
          <h1>{t("welcome")}</h1>
        </form>
      )}
    />
  );
};

export default BookingFormFields;