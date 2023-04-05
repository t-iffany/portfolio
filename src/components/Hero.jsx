import { styles } from '../styles';
import { motion } from 'framer-motion';
import { tiffbitmoji } from '../assets';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SectionWrapper } from '../hoc';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 
        top-[120px] w-full max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="line-dot flex flex-col justify-center items-center mt-5">
          {/* dot */}
          <div className="w-5 h-5 rounded-full bg-[#5C9EAD]" />
          {/* line */}     
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>
        <div className="header-body flex flex-col w-full">
        <div className="header ml-20">
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm &nbsp;
            <span className="text-[#5C9EAD]">Tiffany</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 mb-4`}>
            Full Stack Developer
          </p>
          <p className="text-secondary">
            <motion.div
              animate={{ x: [0, 10, 0], transition: { repeat: Infinity, duration: 1 } }}
              style={{ display: "inline-flex", alignItems: "center", marginRight: "8px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </motion.div>
            I turn ideas into innovative web solutions.
          </p>
          </div>
          <div className="body w-max flex flex-row items-center ml-60 mt-8">
            <div className="flex flex-col items-center justify-start">
              <a href="https://github.com/t-iffany" target="_blank" className="mr-10 mb-3">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/tiffanyleong/" target="_blank" className="mr-10 mb-3">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://resume.creddle.io/resume/fg0759bs3gt" target="_blank" className="mr-10 mb-3">
                <FontAwesomeIcon icon={faFileAlt} size="2x" />
              </a>
              <a href="#contact" className="mr-10 mb-3">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
              <a href="https://devpost.com/t-iffany" target="_blank" className="mr-10">
                <FontAwesomeIcon icon={faDev} size="2x" />
              </a>
            </div>
            <div className="flex flex-col justify-center items-center ml-8">
              <img
                src={tiffbitmoji}
                alt={tiffbitmoji}
                width="300px"
                height="300px"
              />
            </div>
          {/* </div> */}
          </div>
        </div>

        {/* page-down-scroll-icon */}
        <div className="absolute xs:bottom-10 bottom-32 w-full flex
          justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 
              border-secondary flex justify-center items-start p-2">
              {/* animate the y-axis */}
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />

            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "");