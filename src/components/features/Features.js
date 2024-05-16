import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="App Development"
          des="Can develope mobile applications using xcode and android studio."
          icon={<FaMobile />}
        />
        <Card
          title="Game Development"
          des="A game development project using Unity and C#."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Web Development"
          des="Can develope web applications using ReactJS and NextJS."
          icon={<FaGlobe />}
        />
        <Card
          title="Figma Design"
          des="Can design UI/UX using Figma."
          icon={<SiAntdesign />}
        />
      </div>
    </section>
  );
};

export default Features;
