"use client";
import * as React from "react";
import styled from "styled-components";
import ContentBlock from "./ContentBlock";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: screen;
  background-color: #545454;
  font-family: Inter, sans-serif;
  padding: 24px;
  @media (max-width: 991px) {
    padding: 20px;
  }
  @media (max-width: 640px) {
    padding: 16px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 48px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 32px;
  }
  @media (max-width: 640px) {
    gap: 24px;
  }
`;

const MissionVisionSection = () => {
  return (
    <Section aria-label="Mission and Vision">
      <ContentContainer>
        <ContentBlock
          title="Mission"
          description="To deliver innovative, sustainable, and results-driven project management and consultancy solutions. We aim to exceed client expectations by combining strategic planning with professional execution, ensuring each project is delivered on time and within budget."
        />
        <ContentBlock
          title="Vision"
          titleColor="#66a109"
          description="To be the leading project management consultancy that consistently turns visionary ideas into sustainable and successful projects, while fostering long-term relationships with our clients through trust and excellence."
        />
      </ContentContainer>
    </Section>
  );
};

export default MissionVisionSection;
