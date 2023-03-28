import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { projects } from '../constants';
import {fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, "");