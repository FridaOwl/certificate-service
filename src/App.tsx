import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BookingForm from "./components/BookingForm/BookingFormFields";
import CancellationPage from "./components/CancellationPage/CancellationPage";
import "./assets/styles/App.sass";

const App: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log("Form values:", values);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BookingForm onSubmit={handleSubmit} />} />
          <Route path="cancellation" element={<CancellationPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
