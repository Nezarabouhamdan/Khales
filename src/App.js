import React from "react";
import { Globalstyle } from "./Globalstyles";
import { BrowserRouter, Switch, Route } from "react-router-dom"; // Removed unused "Rotue" import
import Home from "./Page/Home";
import Navbar from "./components/Navbar/Navbar";
import "./fonts/BebasNeue-Regular.ttf";
import "./fonts/style.css";
import Footer from "./components/Footer/Footer";
import Projectspage from "./Page/Projectspage";
import Faqs from "./Page/Faqs";
import ServicesPage from "./Page/ServicesPage";
import Aboutus from "./Page/Aboutus";
import Architecture from "./Page/Architecture";
import ProjectManagement from "./Page/Projectmangment";
import Contact from "./Page/Contact";
import DevelpomentPlaning from "./Page/DevelpomentPlaning";
import Bulidingcontracting from "./Page/Bulidingcontracting";
import EngineeringConsultancy from "./Page/EngineeringConsultancy";
import Interiordesgin from "./Page/Interiordesgin";
import Landscaping from "./Page/Landscaping";
import Productpage from "./Page/Productpage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import { footerData } from "./data/FooterData";
import Interiordesginpage from "./Page/Interiordesginpage";
import Fitout from "./Page/Fit-out";
import Realestate from "./Page/Realestate";
import GalleryViewer from "./components/GalleryViewer/Galleryviwer";
import { LanguageProvider } from "./Context/Languagecontext";
import Booking from "./Page/Booking";
import Analytics from "./Analytics";
import CookieConsent from "./CookieConsent";
import { Helmet } from "react-helmet";

function App() {
  return (
    <LanguageProvider>
      <CookieConsent />
      <Analytics />
      <GoogleOAuthProvider clientId="148433952091-s2n7r0q6de9q78vrjetkn3gok2o4nt2h.apps.googleusercontent.com">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Globalstyle />
          <Helmet>
            <title>
              Khales - Luxury Design, Project Management & Consultancy
            </title>
            <meta
              name="description"
              content="Khales offers luxury design, project management, engineering consultancy, interior design, landscaping, and construction services."
            />
            <link
              rel="canonical"
              href="https://nezarabouhamdan.github.io/Khales/"
            />
            {/* Add additional meta tags or Open Graph tags as needed */}
          </Helmet>
          <div className="uc-embed" uc-embed-show-toggle="true"></div>
          <Navbar />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          />
          <a
            href="https://api.whatsapp.com/send?phone=+971521231234&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
            className="float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp my-float"></i>
          </a>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Projects" component={Projectspage} />
            <Route exact path="/Faq" component={Faqs} />
            <Route exact path="/service" component={ServicesPage} />
            <Route exact path="/Aboutus" component={Aboutus} />
            <Route exact path="/ArchitectureDesign" component={Architecture} />
            <Route
              exact
              path="/ProjectManagement"
              component={ProjectManagement}
            />
            <Route
              exact
              path="/Developmentplanning"
              component={DevelpomentPlaning}
            />
            <Route
              exact
              path="/BuildingContracting"
              component={Bulidingcontracting}
            />
            <Route
              exact
              path="/EngineeringConsultancy"
              component={EngineeringConsultancy}
            />
            <Route exact path="/RealEstate" component={Realestate} />
            <Route exact path="/LandscapingDesign" component={Landscaping} />
            <Route
              exact
              path="/InteriorDesign"
              component={Interiordesginpage}
            />
            <Route exact path="/Fit-OutDesign" component={Fitout} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Product" component={Productpage} />
            <Route exact path="/booking" component={Booking} />
          </Switch>
          <Footer footerData={footerData} />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </LanguageProvider>
  );
}

export default App;
