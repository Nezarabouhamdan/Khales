import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeroSlider from "../components/Slider/Slider";
import WhatWeDo2 from "../components/Whatwedo2/WhatWeDo2";
import { Row2 } from "../Globalstyles";
import ServiceCard from "../components/Services2/ServiceCard";
import CTASection from "../components/Homecontact/CTASection";
import { Helmet } from "react-helmet";
import { useLanguage } from "../Context/Languagecontext";
import { slides } from "../data/Servicessliderdata";
import { servicesData } from "../data/servicesdata";
const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    top: 90%;
  }
`;

export const LeftIcons = styled(IconWrapper)`
  left: 50px;
  @media (max-width: 768px) {
    left: 25vw;

    top: 100px;
  }
`;

export const RightIcons = styled(IconWrapper)`
  right: 50px;
  @media (max-width: 768px) {
    right: 25vw;

    bottom: 50px;
  }
`;

export const Icon = styled.a`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  padding: 10px;
  color: white;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #66a109;
  }
`;
// ServicesPage.js - Updated with grid layout
function ServicesPage() {
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  // Get translated services data array (flat list)
  const services = servicesData[language] || servicesData["eng"];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Create chunks of 3 items for each row
  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  const serviceChunks = chunkArray(services, 3);

  return (
    <>
      <Helmet>
        <title>{language === "ar" ? "الخدمات" : "Services"} - Khales</title>
      </Helmet>

      <section>
        <HeroSlider
          slides={slides[language] || slides["eng"]}
          language={language}
          isLoading={isLoading}
          rtl={language === "ar"}
        />

        <WhatWeDo2 rtl={language === "ar"} />

        {serviceChunks.map((chunk, index) => (
          <React.Fragment key={index}>
            <br />
            <Row2 rtl={language === "ar"}>
              {chunk.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  imageSrc={service.image}
                  titlePart1={service.titlePart1}
                  titlePart2={service.titlePart2}
                  description={service.description}
                  buttonText={language === "ar" ? "المزيد" : "Learn More"}
                  rtl={language === "ar"}
                />
              ))}
            </Row2>
          </React.Fragment>
        ))}

        <CTASection language={language} />
      </section>
    </>
  );
}
export default ServicesPage;
