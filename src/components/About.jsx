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
        className="mt-4 text-tertiary text-[16px] max-w-3xl leading-[30px] mb-4"
      >
        I am a Public Health Nurse-transitioned-Developer. &nbsp; 👩🏻‍⚕️ → 👩🏻‍💻 <br /><br />
        When I was younger, I enjoyed coding personal webpages as a hobby, spending countless hours changing cursor icons, making stars fall from the top of the page, adding looped music, and trying to learn from "view page source". At the time, however, coding wasn't advertised to me as a potential career path.<br /><br />
        Fast-forward to my last role as an Informatics Specialist, I became increasingly interested in how the applications and systems actually worked. I started teaching myself how to code online, and I quickly realized that I truly enjoyed it. I then decided to quit my job to pursue my passion
        and enrolled in an intensive full-stack web development bootcamp. I loved every minute of it, and now here we are! <br /><br />
        My other interests:&nbsp;&nbsp;🐶&nbsp; ✈️&nbsp; 🍦&nbsp; 🤸🏻‍♀️&nbsp; 🤿 &nbsp; 🎶
      </motion.p>
    </>
  )
}

// wrap About section with SectionWrapper
export default SectionWrapper(About, "about")