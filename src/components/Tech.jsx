import { SectionWrapper } from "../hoc";
import { languages, frameworks, systems, testing, tools } from "../constants";
import Ball from "./canvas/Ball";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import Tilt from "react-parallax-tilt";

const Tech = () => {
  return (
    <>
      {/* animate the text when scrolling down */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      {/* Programming languages */}
      <div className="flex flex-row items-center mt-4 gap-4">
        <h3 className="text-[#5C9EAD] text-lg font-bold">Programming Languages</h3>
      </div>
      <div className="flex flex-row flex-wrap justify-start">
        {languages.map((language) => (
          <div
            className="w-12 h-12"
            key={language.name}
            style={{ margin: "0.5rem" }}
          >
            <Tilt className="w-full h-full" options={{ max: 25 }}>
              <img
                src={language.icon}
                alt={language.name}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 text-white text-center opacity-0 transition-opacity hover:opacity-100">
                {language.name}
              </div>
            </Tilt>
          </div>
        ))}
      </div>

      {/* Frameworks and libraries */}
      <div className="flex flex-row items-center mt-4 gap-4">
        <h3 className="text-[#5C9EAD] text-lg font-bold">Frameworks/Libraries/Environments</h3>
      </div>
      <div className="flex flex-row flex-wrap justify-start">
        {frameworks.map((framework) => (
          <div
            className="w-12 h-12"
            key={framework.name}
            style={{ margin: "0.5rem" }}
          >
            <Tilt className="w-full h-full" options={{ max: 25 }}>
              <img
                src={framework.icon}
                alt={framework.name}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 text-white text-center opacity-0 transition-opacity hover:opacity-100">
                {framework.name}
              </div>
            </Tilt>
          </div>
        ))}
      </div>

      {/* Systems, CMS, Databases */}
      <div className="flex flex-row items-center mt-4 gap-4">
        <h3 className="text-[#5C9EAD] text-lg font-bold">Systems/CMS/Databases</h3>
      </div>
      <div className="flex flex-row flex-wrap justify-start">
        {systems.map((system) => (
          <div
            className="w-12 h-12"
            key={system.name}
            style={{ margin: "0.5rem" }}
          >
            <Tilt className="w-full h-full" options={{ max: 25 }}>
              <img
                src={system.icon}
                alt={system.name}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 text-white text-center opacity-0 transition-opacity hover:opacity-100">
                {system.name}
              </div>
            </Tilt>
          </div>
        ))}
      </div>

      {/* Testing */}
      <div className="flex flex-row items-center mt-4 gap-4">
        <h3 className="text-[#5C9EAD] text-lg font-bold">Testing</h3>
      </div>
      <div className="flex flex-row flex-wrap justify-start">
        {testing.map((testing) => (
          <div
            className="w-12 h-12"
            key={testing.name}
            style={{ margin: "0.5rem" }}
          >
            <Tilt className="w-full h-full" options={{ max: 25 }}>
              <img
                src={testing.icon}
                alt={testing.name}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 text-white text-center opacity-0 transition-opacity hover:opacity-100">
                {testing.name}
              </div>
            </Tilt>
          </div>
        ))}
      </div>

      {/* Tools */}
      <div className="flex flex-row items-center mt-4 gap-4">
        <h3 className="text-[#5C9EAD] text-lg font-bold">Tools</h3>
      </div>
      <div className="flex flex-row flex-wrap justify-start">
        {tools.map((tool) => (
          <div
            className="w-12 h-12"
            key={tool.name}
            style={{ margin: "0.5rem" }}
          >
            <Tilt className="w-full h-full" options={{ max: 25 }}>
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 text-white text-center opacity-0 transition-opacity hover:opacity-100">
                {tool.name}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");