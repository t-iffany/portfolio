import { styles } from '../styles';
import { motion } from 'framer-motion';
import { tiffbitmoji } from '../assets';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SectionWrapper } from '../hoc';

const Hero = () => {
  return (
    <>
    {/* <section className="relative w-full min-h-screen mx-auto"> */}
      <div className="flex flex-row items-start">
        <div className="hidden md:block line-dot flex flex-col justify-center items-center mt-5 mr-20"> 
          {/* dot */}
          <div className="w-5 h-5 rounded-full bg-[#5C9EAD]" /> 
          {/* line */}
          <div className="w-1 sm:h-80 h-40 blue-gradient" style={{ marginLeft: "9.5px" }} /> 
        </div>
        <div className="header-body flex flex-col w-full mt-8">
          {/* <div className="header ml-20"> */}
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm &nbsp;
              <span className="text-[#5C9EAD]">Tiffany</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 mb-4`}>
              Full Stack Developer
            </p>
            <p className="text-secondary mb-10">
              <motion.div
                animate={{ x: [0, 10, 0], transition: { repeat: Infinity, duration: 1 } }}
                style={{ display: "inline-flex", alignItems: "center" }}
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
              &nbsp; I turn ideas into innovative web solutions
            </p>
          {/* </div> */}
{/* 
          <div className="body flex flex-col md:flex-row justify-center items-center mt-8 max-w-xs sm:max-w-md md:max-w-lg">
            <div className="flex flex-row md:flex-col items-center justify-start justify-center md:mb-0">
              <a href="https://www.linkedin.com/in/tiffanyleong/" target="_blank" className="mr-10 mb-3">
                <FontAwesomeIcon icon={faLinkedin} className="fa-lg w-6 h-6" color="#5C9EAD" />
              </a>
              <a href="https://github.com/t-iffany" target="_blank" className="mr-10 mb-3">
                <FontAwesomeIcon icon={faGithub} className="fa-lg w-6 h-6" color="#5C9EAD" />
              </a>
              <a href="https://resume.creddle.io/resume/fg0759bs3gt" target="_blank" className="mr-10 mb-3">
                <FontAwesomeIcon icon={faFileAlt} className="fa-lg w-6 h-6" color="#5C9EAD" />
              </a>
              <a href="https://devpost.com/t-iffany" target="_blank" className="mr-10 mb-3">
                <FontAwesomeIcon icon={faDev} className="fa-lg w-6 h-6" color="#5C9EAD" />
              </a>
            </div>
            {/* <div className="flex flex-col md:flex-row justify-center items-center"></div> */}
            {/* <div className="flex justify-center items-center mb-8 md:mb-0 md:mr-12">
              <img
                src={tiffbitmoji}
                alt={tiffbitmoji}
                // width="300px"
                // height="300px"
                style={{ maxWidth: "100%", height: "auto"}}
              />
            </div> */} 
          <div className="left-and-right flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col items-center justify-center mr-12">
  <div className="flex flex-row justify-center gap-8">
    <a href="https://www.linkedin.com/in/tiffanyleong/" target="_blank">
      <FontAwesomeIcon icon={faLinkedin} className="fa-lg w-6 h-6 hover:text-white" color="#5C9EAD" />
    </a>
    <a href="https://github.com/t-iffany" target="_blank">
      <FontAwesomeIcon icon={faGithub} className="fa-lg w-6 h-6 hover:text-white" color="#5C9EAD" />
    </a>
    <a href="https://resume.creddle.io/resume/fg0759bs3gt" target="_blank">
      <FontAwesomeIcon icon={faFileAlt} className="fa-lg w-6 h-6 hover:text-white" color="#5C9EAD" />
    </a>
    <a href="https://devpost.com/t-iffany" target="_blank">
      <FontAwesomeIcon icon={faDev} className="fa-lg w-6 h-6 hover:text-white" color="#5C9EAD" />
    </a>
  </div>
  {/* <div className="flex flex-col justify-center items-center mb-8 md:mb-0"> */}
    <img
      src={tiffbitmoji}
      alt={tiffbitmoji}
      height="350px"
      width="350px"
      // style={{ maxWidth: "100%", height: "auto"}}
    />
  {/* </div> */}
</div>

            <div className="flex flex-row text-secondary max-w-xs sm:max-w-md md:max-w-sm xs:mt-4">
              <p className="text-[16px] leading-6">
                I am comfortable being uncomfortable.
                Whether it is learning new technologies, making 
                critical decisions in high-pressure environments
                as a nurse, or solo travelling to foreign places. 
                I embrace opportunities to be curious, adapt, and grow.<br /><br />
                <a href="#contact" className="flex items-center" >
                  <FontAwesomeIcon icon={faEnvelope} size="lg" color="#5C9EAD" className="mr-2" /> 
                  <span className="text-[#5C9EAD] hover:text-white">Contact Me</span>
                </a>
              </p>
            </div>
          </div>
          </div>

          {/* <div className="justify-center text-secondary max-w-xs sm:max-w-md md:max-w-lg">
              <ul className="list-disc-none text-[16px]">
                <li>I embrace opportunities to be curious, adapt, and grow.</li><br />
                <li>I am comfortable being uncomfortable. Whether it is learning new technologies, making critical decisions in high-pressure environments as a nurse, or travelling the world.</li> <br />
                <li style={{ display: "flex", alignItems: "center" }}><a href="#contact" className="mr-2" >
                  <FontAwesomeIcon icon={faEnvelope} size="lg" color="#5C9EAD" /> <span className="text-[#5C9EAD]">Contact Me</span></a>
                </li>
              </ul>
            </div> */}
        </div>
      {/* </div> */}
    {/* </section> */}
    </>
  );
};

export default SectionWrapper(Hero, "");