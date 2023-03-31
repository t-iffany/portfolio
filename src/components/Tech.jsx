import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
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

    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div 
          className="w-28 h-28"
          key={technology.name}
        >
          <Ball icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");