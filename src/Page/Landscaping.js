import React from "react";
import InteriorDesign from "../components/InteriorDesign/InteriorDesign";
import { Herosection, Heroimg } from "../components/Hero/Herostyles";
import {
  ContentColumn,
  Subtitle,
  TextContianer,
  Paragraph,
  Row,
  Title,
} from "../components/Slider/Slider";
import OurProcessWork from "../components/OurProcessWork/OurProcessWork";
import { Row2, Button2, Column } from "../Globalstyles";
import img from "../assets/4.png";
import img2 from "../assets/Black White Tan Minimal Bold FAQ Search Bar Instagram Story.png";
import { GreenText, Title as Title2 } from "../components/Whoweare/TextContent";
import CTASection from "../components/Homecontact/CTASection";
import ProjectHighlight from "../components/Projecthighlights/ProjectHighlight";
import styled from "styled-components";
import { useLanguage } from "../Context/Languagecontext"; // Import the language context

const data = {
  eng: [
    {
      title: "Project Management",
      description1:
        "Khales is a leading Engineering Consultancy and Project Management Company, dominating the entire UAE, the Gulf region, and the international market. We specialize in providing luxury engineering services, delivering excellence in design, construction, and project management.",
      description2:
        "Khales is a leading Engineering Consultancy and Project Management Company, dominating the entire UAE, the Gulf region, and the international market. We specialize in providing luxury engineering services, delivering excellence in design, construction, and project management.",
      description3:
        "Khales is a leading Engineering Consultancy and Project Management Company, dominating the entire UAE, the Gulf region, and the international market. We specialize in providing luxury engineering services, delivering excellence in design, construction, and project management.",
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ee56b6848a5668fe4c1e75c526f9ae88908da749",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/83d057c657e643f783b5365240986c54a25d86a4",
        "https://brabbu.com/blog/wp-content/uploads/2021/02/Aati-tayer-dubai.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2d1c74189930427.65b294ce482ca.jpg",
      ],
    },
  ],
  ar: [
    {
      title: "إدارة المشاريع",
      description1:
        "خالدز هي شركة رائدة في الاستشارات الهندسية وإدارة المشاريع، تهيمن على الإمارات العربية المتحدة ومنطقة الخليج والسوق الدولية. نحن متخصصون في تقديم خدمات هندسية فاخرة، ونقدم التميز في التصميم والبناء وإدارة المشاريع.",
      description2:
        "خالدز هي شركة رائدة في الاستشارات الهندسية وإدارة المشاريع، تهيمن على الإمارات العربية المتحدة ومنطقة الخليج والسوق الدولية. نحن متخصصون في تقديم خدمات هندسية فاخرة، ونقدم التميز في التصميم والبناء وإدارة المشاريع.",
      description3:
        "خالدز هي شركة رائدة في الاستشارات الهندسية وإدارة المشاريع، تهيمن على الإمارات العربية المتحدة ومنطقة الخليج والسوق الدولية. نحن متخصصون في تقديم خدمات هندسية فاخرة، ونقدم التميز في التصميم والبناء وإدارة المشاريع.",
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ee56b6848a5668fe4c1e75c526f9ae88908da749",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/83d057c657e643f783b5365240986c54a25d86a4",
        "https://brabbu.com/blog/wp-content/uploads/2021/02/Aati-tayer-dubai.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2d1c74189930427.65b294ce482ca.jpg",
      ],
    },
  ],
};

const process = {
  eng: [
    { title: "Step 1", content: "Initial consultation and project planning." },
    { title: "Step 2", content: "Design and development phase." },
    { title: "Step 3", content: "Construction and implementation." },
    { title: "Step 4", content: "Project delivery and handover." },
  ],
  ar: [
    { title: "الخطوة 1", content: "الاستشارة الأولية وتخطيط المشروع." },
    { title: "الخطوة 2", content: "مرحلة التصميم والتطوير." },
    { title: "الخطوة 3", content: "البناء والتنفيذ." },
    { title: "الخطوة 4", content: "تسليم المشروع وتسليمه." },
  ],
};

const ProjectHighlightdata = {
  eng: [
    {
      Title: " Case Studies",
      button: " Get in touch with us",

      Subtitle: "Al Wasl Dubai",
      Subheader: "A Turnkey Success Story",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis id purus ut magna tincidunt luctus. Curabitur euismod, turpis ac eleifend congue, nunc justo sollicitudin est, ac fermentum lorem odio eget elit. Nulla facilisi. Phasellus aliquet, felis a consectetur volutpat, nisl magna malesuada dolor, ut scelerisque nisl nulla sit amet ligula. Fusce eget metus nec nunc eleifend facilisis ut nec justo. Integer bibendum, augue eu fermentum sodales, turpis leo pharetra ex, eget dictum sapien turpis eget nunc.",
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ut sapien quis velit vestibulum accumsan vel at lectus. Ut ut nunc at turpis molestie dignissim eget in nunc. Morbi sodales, sapien non facilisis scelerisque, velit lacus eleifend risus, eu eleifend elit elit nec ligula. Mauris sagittis orci nec nisl lacinia, id sodales arcu aliquet. Suspendisse ac ligula ex. Vestibulum in metus non erat imperdiet convallis. Nulla sed libero a metus bibendum sagittis. Fusce vehicula orci id lacus feugiat, ut ultricies nulla lacinia.",
        "Nam venenatis, libero vel fermentum hendrerit, sapien mauris luctus tortor, id laoreet purus nisi non elit. Phasellus cursus, quam eget iaculis ultricies, lorem erat euismod orci, a ultrices justo enim eu dui. Etiam tincidunt felis id odio suscipit, nec aliquet nisl pharetra. Ut in scelerisque eros. Donec eget nisi congue, facilisis arcu eget, ullamcorper odio. Nunc vel nulla a neque elementum volutpat. Duis at velit eget libero interdum ultrices.",
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ut sapien quis velit vestibulum accumsan vel at lectus. Ut ut nunc at turpis molestie dignissim eget in nunc. Morbi sodales, sapien non facilisis scelerisque, velit lacus eleifend risus, eu eleifend elit elit nec ligula. Mauris sagittis orci nec nisl lacinia, id sodales arcu aliquet. Suspendisse ac ligula ex. Vestibulum in metus non erat imperdiet convallis. Nulla sed libero a metus bibendum sagittis. Fusce vehicula orci id lacus feugiat, ut ultricies nulla lacinia.",
      ],
      mainimage: "https://placehold.co/400x300/eeeeee/eeeeee",
      images: [
        "https://placehold.co/400x300/eeeeee/eeeeee",
        "https://placehold.co/400x300/ffffff/ffffff",
        "https://placehold.co/400x300/8b4513/8b4513",
      ],
    },
  ],
  ar: [
    {
      Title: " دراسة المشروع",
      button: "تواصل معنا",
      Subtitle: "الوصل دبي",
      Subheader: "قصة نجاح مفتاح في اليد",
      description: [
        "لوريم إيبسوم هو نص نموذجي يستخدم في صناعة الطباعة والتنضيد. لوريم إيبسوم هو نص نموذجي يستخدم في صناعة الطباعة والتنضيد.",
        "لوريم إيبسوم هو نص نموذجي يستخدم في صناعة الطباعة والتنضيد. لوريم إيبسوم هو نص نموذجي يستخدم في صناعة الطباعة والتنضيد.",
        "لوريم إيبسوم هو نص نموذجي يستخدم في صناعة الطباعة والتنضيد. لوريم إيبسوم هو نص نموذجي يستخدم في صناعة الطباعة والتنضيد.",
        "لوريم إيبسوم هو نص نموذجي يستخدم في صناعة الطباعة والتنضيد. لوريم إيبسوم هو نص نموذجي يستخدم في صناعة الطباعة والتنضيد.",
      ],
      mainimage: "https://placehold.co/400x300/eeeeee/eeeeee",
      images: [
        "https://placehold.co/400x300/eeeeee/eeeeee",
        "https://placehold.co/400x300/ffffff/ffffff",
        "https://placehold.co/400x300/8b4513/8b4513",
      ],
    },
  ],
};
const herodata = {
  eng: [
    {
      title: "Project Mangament",
      paragraph:
        "We take your vision and turn it into reality—handling every detail from planning to delivery with precision and expertise. No delays, no compromises, just turnkey solutions that exceed expectations.",
      button: "get in touch",
    },
  ],
  ar: [
    {
      title: "الخطوة 1",
      paragraph: "الاستشارة الأولية وتخطيط المشروع.",
      button: "تواصل معنا",
    },
  ],
};

export const Column2 = styled.div`
  display: flex;
  width: ${({ rtl }) => (rtl ? "10%" : "50vw")};
  flex-direction: column;
  margin-top: 30%;
  @media (max-width: 1200px) {
    width: 40vw;
    margin-right: 00px;
  }
  @media (max-width: 968px) {
    height: 50vh;

    width: 100vw;

    margin-right: 0;
  }
`;

function Projectmangment() {
  const { language } = useLanguage(); // Get the current language

  return (
    <div>
      <Herosection>
        <Heroimg src="https://i.ibb.co/yc9hzDYt/1.png" />
        <Row page={true} rtl={language === "ar"}>
          <Column2 rtl={language === "ar"}>
            <TextContianer>
              <Title rtl={language === "ar"}>
                {herodata[language][0].title}
              </Title>
              <Paragraph rtl={language === "ar"}>
                {herodata[language][0].paragraph}
              </Paragraph>
            </TextContianer>
          </Column2>
          <ContentColumn>
            {" "}
            <Button2>{herodata[language][0].button}</Button2>
          </ContentColumn>
        </Row>
      </Herosection>
      <InteriorDesign data={data[language]} />
      <Column>
        <Title2>
          {language === "ar" ? "عملية عملنا" : "Our Process"}
          <GreenText>{language === "ar" ? "" : "Work"}</GreenText>
        </Title2>
        <Row2 rtl={language === "ar"}>
          <OurProcessWork panels={process[language]} />
          <img width={"30%"} src={img} alt="Process Work" />
        </Row2>
        <ProjectHighlight data={ProjectHighlightdata[language]} />

        <Title2>
          {language === "ar" ? "عملية عملنا" : "Our Process"}
          <GreenText>{language === "ar" ? "" : "Work"}</GreenText>
        </Title2>
        <Row2 rtl={language === "ar"}>
          <OurProcessWork panels={process[language]} />
          <img width={"30%"} src={img} alt="Process Work" />
        </Row2>
      </Column>
      <CTASection />
    </div>
  );
}

export default Projectmangment;
