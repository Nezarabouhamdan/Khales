import React from "react";
import Hero from "../components/Hero/Hero";
import FeaturedProjects from "../components/Featured Projects/FeaturedProjects";
import LatestProjects from "../components/Latest Projects/LatestProjects";
import PaginatedList from "../components/Pagitionsection/Pagitionsection";
import AboutSection2 from "../components/Our Commitment/AboutSection";
import GalleryViewer from "../components/GalleryViewer/Galleryviwer";
import { GreenText, Title } from "../components/Whoweare/TextContent";
const pexel = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;

const images = [
  {
    //middle
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    url: "https://i.ibb.co/XrwLfbVn/khales-ae-arab-construction-luxury-engineering-make-it-crea-adbc814e-5da3-4265-a683-b41679c9a755-3-e.png",
  },
  {
    position: [-0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: "https://i.ibb.co/hRKcmFXh/img6-min.jpg",
  },
  {
    position: [0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: "    https://i.ibb.co/HDQkwccZ/khales-ae-Modern-minimalist-interior-staircase-open-plan-desi-2ba91f49-ab7b-4ab5-972a-69e06f911a30-1.png",
  },
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: "https://i.ibb.co/jPQCbPdC/Screenshot-2025-03-26-105519.png",
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: "https://i.ibb.co/ZCJVcq6/Screenshot-2025-03-26-105750.png",
  },
  // {
  //   //1
  //   position: [-2, 0, 2.75],
  //   rotation: [0, Math.PI / 2.5, 0],
  //   url: "https://i.ibb.co/HDQkwccZ/khales-ae-Modern-minimalist-interior-staircase-open-plan-desi-2ba91f49-ab7b-4ab5-972a-69e06f911a30-1.png",
  // },
  {
    //7
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: "https://i.ibb.co/hRKcmFXh/img6-min.jpg",
  },
  {
    //8
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: "https://i.ibb.co/0jR7hgcW/Screenshot-2025-03-26-105833.png",
  },
  // {
  //   //last9
  //   position: [2, 0, 2.75],
  //   rotation: [0, -Math.PI / 2.5, 0],
  //   url: "https://i.ibb.co/XrwLfbVn/khales-ae-arab-construction-luxury-engineering-make-it-crea-adbc814e-5da3-4265-a683-b41679c9a755-3-e.png",
  // },
];
function Projectspage() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
      }}
    >
      {/* <Hero /> */}
      <Title
        style={{
          marginTop: "150px",
        }}
      >
        <GreenText>Our</GreenText> Gallery
      </Title>
      <GalleryViewer images={images} backgroundColor="white" fogColor="black" />
      {/* <LatestProjects />
      <AboutSection2 />

      <PaginatedList /> */}
    </div>
  );
}

export default Projectspage;
