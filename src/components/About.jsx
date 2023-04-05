import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';
// import { qualities } from '../constants';
// import Tilt from 'react-parallax-tilt';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      {/* animate the text when scrolling down */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionHeadText}>Introduction.</h2>
      </motion.div>

      {/* paragraph */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <ul className="list-none" style={{ lineHeight: 1.2 }}>
          <li>✨ I am comfortable being uncomfortable ✨ </li><br></br>
          <li>Whether it is learning new technologies, making critical decisions in high-pressure environments as a nurse, or solo traveling and living in foreign places around the world.</li> <br></br>  
          <li>I embrace opportunities to be curious, adapt, and grow. </li> <br></br>
          <li>My story: I am a public health nurse transitioned developer. Back in the day, I used to code personal webpages as a hobby. I recall staying up until at least 3am every night, changing my cursor icon, making stars fall from the top of the page, adding looped music, and trying to learn from "view page source". Unfortunately at the time, it was not advertised as a "career" to me. Fast-forward to my last role as an Informatics Specialist, I realized that I was very interested in how the application and system actually works. I started to self-learn coding online, realized that I truly enjoyed it, and decided to quit my job to pursue my passion. I completed an intensive full stack web development bootcamp, and I loved every minute of it. Now here we are!</li> <br></br>
          <li>A few of my other interests: 🐶 ✈️ 🍦 🤸🏻‍♀️ 👩🏻‍⚕️ 🤿 </li>
        </ul>
      </motion.p>
    </>
  )
}

// wrap About section with SectionWrapper
export default SectionWrapper(About, "about")