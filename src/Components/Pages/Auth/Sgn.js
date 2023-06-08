import React from "react";
import "./ContactUs.css";
import Navbar from "../../Helpers/Navbar";
import Footer from "../../Helpers/Footer";
import { useState } from "react";
import ContactUsDetails from "./ContactUsDetails";
const Sgn = () => {
  const [select, setSelect] = useState({});

  const onChange = (value) => {
    console.log(value);
  };
  return (
    <>
      <Navbar />
      <ContactUsDetails />
      <Footer />
    </>
  );
};
// hello
export default Sgn;
