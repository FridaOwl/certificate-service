import React from "react";

interface BookingButtonProps {
  submitting: boolean;
  t: (key: string) => string;
}

const BookingButton: React.FC<BookingButtonProps> = ({ submitting, t }) => (
  <button type="submit" className="submitButton" disabled={submitting}>
    {t("bookNow")}
  </button>
);

export default BookingButton;
