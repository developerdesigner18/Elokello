import "./App.css";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Campaign from "./Components/Pages/Campaign/Campaign";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import SignUp from "./Components/Pages/Auth/SignUp/SignUp";
import Login from "./Components/Pages/Auth/Login/Login";
import EmailVarrify from "./Components/Pages/Auth/EmailVarrify/EmailVarrify";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/EmailVarrify" element={<EmailVarrify />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Campaign" element={<Campaign />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
