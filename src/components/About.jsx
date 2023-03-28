import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';
import { qualities } from '../constants';

const QualityCard = ({ index, title, icon }) => {
  return (
    <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
      {/* animate the text when scrolling down */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* paragraph */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a Full Stack Developer experienced in systems implementations. 
        Analytical problem solver with proven ability for empathizing with end-users, 
        collaboration, communication, and adaptability. Determined to develop and 
        optimize scalable websites and applications.
      </motion.p>

      {/* add cards for Qualities component from index.js */}
      <div className="mt-20 flex flex-wrap gap-10">
        {qualities.map((quality, index) => (
          <QualityCard key={quality.title} index=
          {index} {...quality} />
        ))}

      </div>
    </>
  )
}

export default About