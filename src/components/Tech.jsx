import { SectionWrapper } from "../hoc";
import { languages, frameworks, systems, testing, tools } from "../constants";
import Ball from "./canvas/Ball";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      {/* animate the text when scrolling down */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      {/* Programming languages
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {languages.map((language) => (
        <div 
          className="w-28 h-28"
          key={language.name}
        >
          <Ball icon={language.icon} />
        </div>
      ))}
    </div> */}
      {/* Programming languages */}
      <div className="flex flex-row items-center mt-10 gap-4">
        <h3 className="text-[#5C9EAD] text-lg font-bold">Programming Languages</h3>
      </div>
      <div className="flex flex-row flex-wrap justify-start mt-2">
        {languages.map((language) => (
          <div
            className="w-28 h-28"
            key={language.name}
          >
            <Ball icon={language.icon} />
          </div>
        ))}
      </div>
      {/* Frameworks and libraries */}
      <div className="flex flex-row items-center mt-10 gap-4">
        <h3 className="text-[#5C9EAD] text-lg font-bold">Frameworks/Libraries/Environments</h3>
      </div>
      <div className="flex flex-row flex-wrap justify-start mt-2">
        {frameworks.map((framework) => (
          <div
            className="w-28 h-28"
            key={framework.name}
          >
            <Ball icon={framework.icon} />
          </div>
        ))}
      </div>
      {/* Systems, CMS, Databases */}
      <div className="flex flex-row items-center mt-10 gap-4">
        <h3 className="text-[#5C9EAD] text-lg font-bold">Systems/CMS/Databases</h3>
      </div>
      <div className="flex flex-row flex-wrap justify-start mt-2">
        {systems.map((system) => (
          <div
            className="w-28 h-28"
            key={system.name}
          >
            <Ball icon={system.icon} />
          </div>
        ))}
      </div>
      {/* Testing */}
      <div className="flex flex-row items-center mt-10 gap-4">
        <h3 className="text-[#5C9EAD] text-lg font-bold">Testing</h3>
      </div>
      <div className="flex flex-row flex-wrap justify-start mt-2">
        {testing.map((testing) => (
          <div
            className="w-28 h-28"
            key={testing.name}
          >
            <Ball icon={testing.icon} />
          </div>
        ))}
      </div>
        {/* Tools */}
        <div className="flex flex-row items-center mt-10 gap-4">
        <h3 className="text-[#5C9EAD] text-lg font-bold">Tools</h3>
      </div>
      <div className="flex flex-row flex-wrap justify-start mt-2">
        {tools.map((tool) => (
          <div
            className="w-28 h-28"
            key={tool.name}
          >
            <Ball icon={tool.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");