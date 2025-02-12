import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingForm from "./components/BookingForm/BookingFormFields";
import "./assets/styles/App.sass";

const App: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log("Form values:", values);
  };
  return (
    <Router>
      <Routes>
          <Route index element={<BookingForm onSubmit={handleSubmit} />} />
      </Routes>
    </Router>
  );
};

export default App;
