import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FreeConsult from "./ContactForm/FreeConsult.jsx";
import LetsTalk from "./ContactForm/LetsTalk.jsx";
import BookAppointment from "./ContactForm/BookAppointment.jsx";
import OrderNow from "./ContactForm/OrderNow.jsx";
import GetQuote from "./ContactForm/GetQuote.jsx";
import JoinHands from "./ContactForm/JoinHands.jsx";
import DownloadForm from "./ContactForm/DownloadForm.jsx";
import SubscribeForm from "./ContactForm/SubscribeForm.jsx";

function App() {
  return (
    <>
      <FreeConsult />
      <LetsTalk />
      <BookAppointment />
      <OrderNow />
      < GetQuote />
      < JoinHands />
      <DownloadForm/>
      <SubscribeForm />
    </>
  );
}

export default App;