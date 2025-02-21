import React, { useState } from "react";
import { Form } from "react-final-form";
import { useTranslation } from "react-i18next";
import FieldWrapper from "../FieldWrapper/FieldWrapper";

const CancellationPage: React.FC = () => {
  const { t } = useTranslation();
  const [orderInfo, setOrderInfo] = useState<any>(null);

  const handleSubmit = (values: any) => {
    console.log("Отмена заказа:", values);
    // Здесь нужно будет подключить БД
    // Пока что имитируем наличие заказа
    setOrderInfo({
      service: "Пример услуги",
    });
  };

  const handleCancelOrder = () => {
    console.log("Заказ отменен");
    // Здесь нужно будет подключить БД для удаления заказа
    setOrderInfo(null);
  };

  return (
    <div className="formContainer">
      <h2>{t("cancellationPageTitle")}</h2>
      {!orderInfo ? (
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="formContainer">
              <div className="formGroup">
                <div className="inputContainer">
                  <label>{t("firstName")}:</label>
                  <FieldWrapper
                    name="firstName"
                    type="text"
                    className="customInput"
                  />
                </div>
                
                <div className="inputContainer">
                  <label>{t("phoneNumber")}:</label>
                  <FieldWrapper
                    name="phoneNumber"
                    type="text"
                    className="customInput"
                    placeholder="+79XXXXXXXXX"
                  />
                </div>
              </div>
              <button type="submit" className="submitButton">
                {t("findOrder")}
              </button>
            </form>
          )}
        />
      ) : (
        <div className="formContainer">
          <h3>{t("orderDetails")}</h3>
          <button onClick={handleCancelOrder} className="submitButton">
            {t("cancelOrder")}
          </button>
        </div>
      )}
    </div>
  );
};

export default CancellationPage;
