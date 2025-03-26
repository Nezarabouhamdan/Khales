import React from "react";
import styled from "styled-components";
import MultiStepForm from "../components/Stepper/MultiStepForm";
import { GreenText, Title } from "../components/Whoweare/TextContent";
import backgroundImage from "../assets/Group.png"; // Adjust the path to your image

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust height as needed */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f8f9fa;

    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    opacity: 0.8; /* Adjust opacity as needed */
    z-index: -1;
  }
`;

function Booking() {
  return (
    <Wrapper>
      <Title style={{ marginTop: "100px" }}>
        Booking
        <GreenText> appointment </GreenText>
      </Title>
      <MultiStepForm />
    </Wrapper>
  );
}

export default Booking;
