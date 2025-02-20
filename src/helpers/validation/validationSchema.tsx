import * as yup from "yup";
import { useTranslation } from "react-i18next";

export const createBookingFormValidationSchema = () => {
  const { t } = useTranslation();

  return yup.object().shape({
    firstName: yup
      .string()
      .min(2, t("minLengthError"))
      .max(100, t("maxLengthError"))
      .required(t("enterFirstName")),
    email: yup
      .string()
      .min(2, t("emailError"))
      .max(100, t("emailError"))
      .required(t("enterEmail")),
    phoneNumber: yup
      .string()
      .matches(/^\+?[0-9]{11}$|^[0-9]{11}$/, {
        message: t("invalidPhoneNumber"),
        excludeEmptyString: true,
      })
      .required(t("enterPhoneNumber")),
    comment: yup.string(),
  });
};

export const validateForm =
  (validationSchema: yup.ObjectSchema<any>) => (values: any) => {
    try {
      validationSchema.validateSync(values, { abortEarly: false });
    } catch (validationError) {
      const errors: any = {};
      if (validationError instanceof yup.ValidationError) {
        validationError.inner.forEach((error) => {
          if (error.path) {
            errors[error.path] = error.message;
          }
        });
      }
      return errors;
    }
  };
