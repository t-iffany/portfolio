import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';
// import { attributes } from '../constants';
// import Tilt from 'react-parallax-tilt';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      {/* animate the text when scrolling down */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionHeadText}>Story.</h2>
      </motion.div>

      {/* paragraph */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]"
      >
        <ul className="list-none" style={{ lineHeight: 1.5 }}>
          <li>I am a Public Health Nurse-transitioned-Developer. &nbsp; 👩🏻‍⚕️ → 👩🏻‍💻 </li><br />
          <li>I used to code personal webpages as a hobby. I often stayed up late into the night, changing my cursor icon, making stars fall from the top of the page, adding looped music, and trying to learn from "view page source". Unfortunately, at the time, it was not advertised as a "career" to me. </li><br />
          <li>Fast-forward to my last role as an Informatics Specialist, I realized that I was very interested in how the applications and systems actually worked. I started self-learning programming online, realized that I truly enjoyed it, and decided to pursue my passion. </li><br />
          <li>I enrolled in an intensive full-stack web development bootcamp, and I loved every minute of it. And now, here we are!</li> <br />
          <li>Some of my other interests: 🐶 ✈️ 🍦 🤸🏻‍♀️ 🤿 </li>
        </ul>
      </motion.p>
    </>
  )
}

// wrap About section with SectionWrapper
export default SectionWrapper(About, "about")