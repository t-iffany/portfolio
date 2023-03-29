// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
// import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
// import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const Experience = () => {
  return (
    // <div>Experience</div>
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My experience</p>
        <h2 className={styles.sectionHeadText}>Work + Education.</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Experience, "work");

// export default Experience;