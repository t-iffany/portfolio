import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';
import { qualities } from '../constants';
import Tilt from 'react-parallax-tilt';
import { SectionWrapper } from '../hoc';

// qualities from index.js
const QualityCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 
          min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Strengths = () => {
  return (
    <>
      {/* animate the text when scrolling down */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionHeadText}>Strengths.</h2>
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

// wrap Strengths section with SectionWrapper
export default SectionWrapper(Strengths, "")