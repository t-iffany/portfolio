import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';
import { attributes } from '../constants';
import Tilt from 'react-parallax-tilt';
import { SectionWrapper } from '../hoc';

// attributes from index.js
const AttributeCard = ({ index, title, icon, points }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient rounded-[20px] shadow-card h-62"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-[#59A7C1] rounded-[20px] py-3 px-5
          h-[280px] flex justify-start items-center flex-col w-[270px]"
        >
          {/* <img src={icon} alt={title}
            className="w-16 h-16 object-contain bg-[#59A7C1]"
          /> */}
          <h3 className="text-white text-[20px] font-bold text-center bg-[transparent] w-full mb-2 w-44" style={{ whiteSpace: "nowrap", textAlign: "center", width: "12em" }}>
            {title}
          </h3>
          <p className="text-[14px] overflow-hidden bg-[transparent] w-90">{points}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Attributes = () => {
  return (
    <>
      {/* animate the text when scrolling down */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My strengths</p>
        <h2 className={styles.sectionHeadText}>Attributes.</h2>
      </motion.div>

      {/* add cards for Qualities component from index.js */}
      <div className="mt-10 flex flex-wrap gap-10">
        {attributes.map((attribute, index) => (
          <AttributeCard key={attribute.title} index=
          {index} {...attribute} />
        ))}
      </div>

      {/* paragraph */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-tertiary text-[17px] max-w-xs sm:max-w-md md:max-w-lg ml-6"
        style={{ maxWidth: "100%"}}
      >
        <ul className="list-disc mt-12" style={{ lineHeight: 1.2 }}>
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

// wrap Attributes section with SectionWrapper
export default SectionWrapper(Attributes, "attributes")