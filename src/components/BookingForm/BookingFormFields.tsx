import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form } from "react-final-form";
import "./BookingFormFields.sass";
import "../LanguageButton/LanguageButton.sass";
import {
  createBookingFormValidationSchema,
  validateForm,
} from "../../helpers/validation/validationSchema";
import { Link } from "react-router-dom";
import FieldWrapper from "../FieldWrapper/FieldWrapper";

interface BookingFormFieldsProps {
  onSubmit: (values: FormValues) => void;
}

interface FormValues {
  firstName: string;
  email: string;
  phoneNumber: string;
}

const BookingFormFields: React.FC<BookingFormFieldsProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const validationSchema = createBookingFormValidationSchema();


  const certificateType = [
    t("random_bonus"),
  ];


  return (
    <Form
      onSubmit={onSubmit}
      validate={validateForm(validationSchema)}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} className="formContainer">
          <h1>{t("welcome")}</h1>

          <div className="formGroup">
            <div className="inputContainer">
              <label>{t("certificateType")}:</label>
              <FieldWrapper
                name="certificateType"
                type="select"
                className="customInput"
              >
                <option value="">{t("certificateType")}</option>
                {certificateType.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </FieldWrapper>
            </div>
          </div>


          <div className="formGroup">
            <div className="inputContainer">
              <label>{t("firstName")}:</label>
              <FieldWrapper
                name="firstName"
                type="text"
                className="customInput"
              />
            </div>
          </div>

          <div className="inputContainer">
            <label>{t("email")}:</label>
            <FieldWrapper name="email" type="email" className="customInput" />
          </div>

          <div className="formGroup">
            <div className="inputContainer">
              <label>{t("phoneNumber")}:</label>
              <FieldWrapper
                name="phoneNumber"
                type="text"
                className="customInput"
              />
            </div>
          </div>

          <div className="formGroup">
            <Link to="/cancellation">{t("cancelBooking")}</Link>
          </div>

        </form>
      )}
    />
  );
};

export default BookingFormFields;
