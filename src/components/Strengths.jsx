import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';
import { qualities } from '../constants';
import Tilt from 'react-parallax-tilt';
import { SectionWrapper } from '../hoc';

// qualities from index.js
const QualityCard = ({ index, title, icon, points }) => {
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
          className="bg-[#5C9EAD] rounded-[20px] py-4 px-12 
          h-[280px] flex justify-start items-center flex-col w-full h-full"
        >
          {/* <img src={icon} alt={title}
            className="w-16 h-16 object-contain bg-[#5C9EAD]"
          /> */}
          <h3 className="text-white text-[20px] font-bold text-center bg-[transparent] w-full mb-2 w-40">
            {title}
          </h3>
          <p className="text-[15px] overflow-hidden bg-[transparent] w-40">{points}</p>
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
        <p className={styles.sectionSubText}>My strengths</p>
        <h2 className={styles.sectionHeadText}>Attributes.</h2>
      </motion.div>

      {/* add cards for Qualities component from index.js */}
      <div className="mt-10 flex flex-wrap gap-10">
        {qualities.map((quality, index) => (
          <QualityCard key={quality.title} index=
          {index} {...quality} />
        ))}
      </div>

      {/* paragraph */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <ul className="list-disc mt-12 ml-6" style={{ lineHeight: 1.2 }}>
          <li>Full Stack Developer experienced in systems implementations</li><br />
          <li>Hands-on experience building fully integrated and functional full stack projects that incorporate modern technologies</li> <br />  
          <li>Analytical problem solver who enjoys challenges that require critical thinking</li> <br />
          <li>Passion for innovation and new technologies</li><br />
          <li>Determined to develop and optimize scalable websites, applications, and products</li><br />
        </ul> 
      </motion.p>
    </>
  )
}

// wrap Strengths section with SectionWrapper
export default SectionWrapper(Strengths, "")