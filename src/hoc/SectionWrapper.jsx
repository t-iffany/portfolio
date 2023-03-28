// SectionWrapper will apply styling and motions to all 
// sections that we wrap SectionWrapper with

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

// create a higher order Component, which will contain another component inside it
// a function returning another function
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* create invisible span section with empty space to create 
        effect for down-scroll icon */}
        <span className="hash-span" id={idName}>
          &nsbp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;