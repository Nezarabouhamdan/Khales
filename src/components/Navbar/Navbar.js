import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { NavLink, Link } from "react-router-dom";
import "./Nav.css";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  Text,
} from "./NavbarStyles.js";

import { useLocation, useHistory } from "react-router-dom";
import logo from "../../assets/Khales Logo.png";
import styled from "styled-components";
import useDeviceSize from "../../Page/WindowSize.js";
import { useLanguage } from "../../Context/Languagecontext.js";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const location = useLocation();

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const StyledButton = styled(Link)`
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
    z-index: 1;
    border-radius: 5px;
    background-color: rgba(92, 145, 8, 1);
    padding: 11px 25px;
    font-size: 15px;
    color: rgb(0, 0, 0);
    letter-spacing: 0.36px;
    font-weight: 400;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    transition: background-color 0.2s ease;
    text-decoration: none;
    &:hover {
      background-color: #545454;
    }

    &:focus {
      outline: 2px solid #fff;
      outline-offset: 2px;
    }

    @media (max-width: 991px) {
      width: 230px;
      padding-left: 20px;
      padding-right: 20px;
      margin-right: 0px;
    }
  `;

  const tabE = [
    "Home",
    "Services",
    "Project Management",
    "Development Planning",
    "Architecture",
    "Building Contracting",
    "Engineering Consultancy",
    "Interior Design",
    "Landscaping",
    "Real Estate",
    "Fit-Out",
    "Portfolio",
    "Connet",
    "About Khales",
    "FAQ",
    "Language",
    "Arabic",
    "English",
  ];

  const tabA = [
    "الرئيسية",
    "الخدمات",
    "إدارة مشاريع",
    "مخطط تطوير",
    "المعمارية",
    "عقود بناء",
    "استشارات هندسية",
    " تصميم داخلي",
    " المناظر الطبيعية",
    "حلول عقارية",
    "التجهيز الداخلي",
    "المشاريع",
    " اتصل بنا",
    "نبذة عنا",
    "الاسئلة الشائعه",
    "اللغة",
    "العربية",
    "الانجليزية",
  ];

  const [show, setShow] = useState(false);
  const [tabs, setTabs] = useState(language === "ar" ? tabA : tabE);

  useEffect(() => {
    setTabs(language === "ar" ? tabA : tabE);
  }, [language]);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    // Remove the NavLink navigation and just change the language
  };

  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setShow(false);
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
  const toggleSubmenu2 = () => {
    setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
  };
  let boxClassSubMenu2 = ["sub__menus"];
  if (isMenuSubMenu2) {
    boxClassSubMenu2.push("sub__menus__Active");
  } else {
    boxClassSubMenu2.push("");
  }

  const [isMenuSubMenu3, setMenuSubMenu3] = useState(false);
  const toggleSubmenu3 = () => {
    setMenuSubMenu3(isMenuSubMenu3 === false ? true : false);
  };
  let boxClassSubMenu3 = ["sub__menus"];
  if (isMenuSubMenu3) {
    boxClassSubMenu3.push("sub__menus__Active");
  } else {
    boxClassSubMenu3.push("");
  }

  const [isMenuSubMenu4, setMenuSubMenu4] = useState(false);
  const toggleSubmenu4 = () => {
    setMenuSubMenu4(isMenuSubMenu4 === false ? true : false);
  };
  let boxClassSubMenu4 = ["sub__menus"];
  if (isMenuSubMenu4) {
    boxClassSubMenu4.push("sub__menus__Active");
  } else {
    boxClassSubMenu4.push("");
  }

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Nav className={isSticky ? "sticky" : ""}>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon src={logo} />
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {show ? <FaTimes /> : <CgMenuRight />}
        </MobileIcon>
        <NavMenu show={show}>
          <NavItem>
            {useDeviceSize()[0] > "960" ? (
              ""
            ) : (
              <StyledButton style={{ margin: "auto" }}>
                {language === "eng" ? "Book Consultation" : "أحجز موعدك الآن"}
              </StyledButton>
            )}
            <ul className={boxClass.join(" ")}>
              <li className="menu-item">
                <NavLink
                  exact
                  activeClassName="is-active"
                  onClick={toggleClass}
                  to={`/`}
                >
                  {" "}
                  <Text
                    style={{
                      color: location.pathname === "/" ? "#66a109" : "black",
                    }}
                  >
                    {" "}
                    {tabs[0]}{" "}
                  </Text>
                </NavLink>
              </li>
              <li
                onClick={toggleSubmenu}
                className="menu-item sub__menus__arrows"
              >
                {" "}
                <Link to="/service">
                  {" "}
                  <Text
                    style={{
                      color:
                        location.pathname === "/service" ? "#66a109" : "black",
                    }}
                  >
                    {tabs[1]}
                  </Text>{" "}
                </Link>
                <ul className={boxClassSubMenu.join(" ")}>
                  <li>
                    {" "}
                    <Link
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/ProjectManagement`}
                    >
                      {" "}
                      <Text
                        style={{
                          color:
                            location.pathname === "/ProjectManagement"
                              ? "#66a109"
                              : "black",
                        }}
                      >
                        {" "}
                        {tabs[2]}{" "}
                      </Text>{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/Developmentplanning`}
                    >
                      {" "}
                      <Text
                        style={{
                          color:
                            location.pathname === "/Developmentplanning"
                              ? "#66a109"
                              : "black",
                        }}
                      >
                        {" "}
                        {tabs[3]}{" "}
                      </Text>{" "}
                    </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/ArchitectureDesign`}
                    >
                      {" "}
                      <Text
                        style={{
                          color:
                            location.pathname === "/ArchitectureDesign"
                              ? "#66a109"
                              : "black",
                        }}
                      >
                        {" "}
                        {tabs[4]}{" "}
                      </Text>
                    </NavLink>{" "}
                  </li>{" "}
                  <li>
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/BuildingContracting`}
                    >
                      {" "}
                      <Text
                        style={{
                          color:
                            location.pathname === "/BuildingContracting"
                              ? "#66a109"
                              : "black",
                        }}
                      >
                        {" "}
                        {tabs[5]}{" "}
                      </Text>
                    </NavLink>{" "}
                  </li>{" "}
                  <li>
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/EngineeringConsultancy`}
                    >
                      {" "}
                      <Text
                        style={{
                          color:
                            location.pathname === "/EngineeringConsultancy"
                              ? "#66a109"
                              : "black",
                        }}
                      >
                        {" "}
                        {tabs[6]}{" "}
                      </Text>
                    </NavLink>{" "}
                  </li>{" "}
                  <li>
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/InteriorDesign`}
                    >
                      {" "}
                      <Text
                        style={{
                          color:
                            location.pathname === "/InteriorDesign"
                              ? "#66a109"
                              : "black",
                        }}
                      >
                        {" "}
                        {tabs[7]}{" "}
                      </Text>
                    </NavLink>{" "}
                  </li>{" "}
                  <li>
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/LandscapingDesign`}
                    >
                      {" "}
                      <Text
                        style={{
                          color:
                            location.pathname === "/LandscapingDesign"
                              ? "#66a109"
                              : "black",
                        }}
                      >
                        {" "}
                        {tabs[8]}{" "}
                      </Text>
                    </NavLink>{" "}
                  </li>{" "}
                  <li>
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/RealEstate`}
                    >
                      {" "}
                      <Text
                        style={{
                          color:
                            location.pathname === "/RealEstate"
                              ? "#66a109"
                              : "black",
                        }}
                      >
                        {" "}
                        {tabs[9]}{" "}
                      </Text>
                    </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/Fit-OutDesign`}
                    >
                      {" "}
                      <Text
                        style={{
                          color:
                            location.pathname === "/Fit-OutDesign"
                              ? "#66a109"
                              : "black",
                        }}
                      >
                        {" "}
                        {tabs[10]}{" "}
                      </Text>
                    </NavLink>{" "}
                  </li>
                </ul>
              </li>{" "}
              <li className="menu-item">
                <NavLink
                  exact
                  activeClassName="is-active"
                  onClick={toggleClass}
                  to={`/PROJECTS`}
                >
                  {" "}
                  <Text
                    style={{
                      color:
                        location.pathname === "/PROJECTS" ? "#66a109" : "black",
                    }}
                  >
                    {" "}
                    {tabs[11]}{" "}
                  </Text>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  exact
                  activeClassName="is-active"
                  onClick={toggleClass}
                  to={`/Contact`}
                >
                  {" "}
                  <Text
                    style={{
                      color:
                        location.pathname === "/Contact" ? "#66a109" : "black",
                    }}
                  >
                    {" "}
                    {tabs[12]}{" "}
                  </Text>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  exact
                  activeClassName="is-active"
                  onClick={toggleClass}
                  to={`/ABOUTUS`}
                >
                  {" "}
                  <Text
                    style={{
                      color:
                        location.pathname === "/ABOUTUS" ? "#66a109" : "black",
                    }}
                  >
                    {" "}
                    {tabs[13]}{" "}
                  </Text>
                </NavLink>
              </li>
              <li
                onClick={toggleSubmenu4}
                className="menu-item sub__menus__arrows"
              >
                <Link to="#">
                  <Text>{tabs[15]}</Text>
                </Link>
                <ul className={boxClassSubMenu4.join(" ")}>
                  <li>
                    <button
                      onClick={() => handleLanguageChange("ar")}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        padding: "8px 16px",
                        color: language === "ar" ? "#66a109" : "black",
                      }}
                    >
                      <Text>{tabs[16]}</Text>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLanguageChange("eng")}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        padding: "8px 16px",
                        color: language === "eng" ? "#66a109" : "black",
                      }}
                    >
                      <Text>{tabs[17]}</Text>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </NavItem>
        </NavMenu>
        <NavMenu>
          <StyledButton to={`/booking`}>
            {language === "eng" ? "Book Consultation" : "أحجز موعدك الآن"}
          </StyledButton>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
