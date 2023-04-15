import { styles } from '../styles';
import { motion } from 'framer-motion';
import { tiffbitmoji } from '../assets';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SectionWrapper } from '../hoc';

const Hero = () => {

  const message = ["I turn ideas into innovative web solutions  "];
  const speed = 110;
  let textPosition = 0;

  function typewriter() {
    document.querySelector("#message").innerHTML = message[0].substring(0, textPosition) + '<span id="typewriter">|</span>';
    if (textPosition++ != message[0].length) {
      setTimeout(typewriter, speed);
    } else {
      setTimeout(() => {
        textPosition = 0;
        typewriter();
      }, 2500); // add a delay of 2 seconds before resetting and looping
    }
  }

window.addEventListener("load", typewriter);

return (
  <>
    {/* <section className="relative w-full min-h-screen mx-auto"> */}
    <div className="flex flex-row items-start">
      <div className="hidden md:block line-dot flex flex-col justify-center items-center mt-5 mr-20">
        {/* dot */}
        <div className="w-5 h-5 rounded-full bg-secondary" />
        {/* line */}
        <div className="w-1 sm:h-80 h-40 blue-gradient" style={{ marginLeft: "9.5px" }} />
      </div>
      <div className="header-body flex flex-col w-full mt-8">
        {/* <div className="header ml-20"> */}
        <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm &nbsp;
          <span className="text-secondary">Tiffany</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-secondary mb-4`}>
          Full Stack Developer
        </p>
        <p id="message" class="text-tertiary mb-10">
        </p>
        {/* </div> */}
        {/* 
          <div className="body flex flex-col md:flex-row justify-center items-center mt-8 max-w-xs sm:max-w-md md:max-w-lg">
            <div className="flex flex-row md:flex-col items-center justify-start justify-center md:mb-0">
              <a href="https://www.linkedin.com/in/tiffanyleong/" target="_blank" className="mr-10 mb-3">
                <FontAwesomeIcon icon={faLinkedin} className="fa-lg w-6 h-6" color="#59A7C1" />
              </a>
              <a href="https://github.com/t-iffany" target="_blank" className="mr-10 mb-3">
                <FontAwesomeIcon icon={faGithub} className="fa-lg w-6 h-6" color="#59A7C1" />
              </a>
              <a href="https://resume.creddle.io/resume/fg0759bs3gt" target="_blank" className="mr-10 mb-3">
                <FontAwesomeIcon icon={faFileAlt} className="fa-lg w-6 h-6" color="#59A7C1" />
              </a>
              <a href="https://devpost.com/t-iffany" target="_blank" className="mr-10 mb-3">
                <FontAwesomeIcon icon={faDev} className="fa-lg w-6 h-6" color="#59A7C1" />
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
                <FontAwesomeIcon icon={faLinkedin} className="fa-lg w-6 h-6 hover:text-white" color="#9FE2BF" />
              </a>
              <a href="https://github.com/t-iffany" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="fa-lg w-6 h-6 hover:text-white" color="#9FE2BF" />
              </a>
              <a href="https://resume.creddle.io/resume/fg0759bs3gt" target="_blank">
                <FontAwesomeIcon icon={faFileAlt} className="fa-lg w-6 h-6 hover:text-white" color="#9FE2BF" />
              </a>
              <a href="https://devpost.com/t-iffany" target="_blank">
                <FontAwesomeIcon icon={faDev} className="fa-lg w-6 h-6 hover:text-white" color="#9FE2BF" />
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

          <div className="flex flex-row text-tertiary max-w-xs sm:max-w-md md:max-w-sm xs:mt-4">
            <p className="text-[16px] leading-6">
              I am comfortable being uncomfortable.
              Whether it is learning new technologies, making
              critical decisions in high-pressure environments
              as a nurse, or solo travelling to foreign places.
              I embrace opportunities to be curious, adapt, and grow.<br /><br />
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center mb-8">
                  <a href="#projects" className="flex items-center" >
                    <button className="text-white hover:text-[#72A38A] hover:bg-white px-5 py-1 rounded-xl bg-[#72A38A] mb-1 transition-colors duration-300">Projects</button>
                  </a>
                  <a href="#projects">
                    <motion.div
                      animate={{ y: [0, 10, 0], transition: { repeat: Infinity, duration: 1 } }}
                      style={{ display: "inline-flex", alignItems: "center" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#9FE2BF"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12l7 7 7-7" />
                      </svg>
                    </motion.div>
                  </a>
                </div>
                <a href="#contact" className="flex items-center" >
                  <button className="text-white hover:text-[#72A38A] hover:bg-white px-5 py-1 rounded-xl bg-[#72A38A] transition-colors duration-300">Contact</button>
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>

      {/* <div className="justify-center text-secondary max-w-xs sm:max-w-md md:max-w-lg">
              <ul className="list-disc-none text-[16px]">
                <li>I embrace opportunities to be curious, adapt, and grow.</li><br />
                <li>I am comfortable being uncomfortable. Whether it is learning new technologies, making critical decisions in high-pressure environments as a nurse, or travelling the world.</li> <br />
                <li style={{ display: "flex", alignItems: "center" }}><a href="#contact" className="mr-2" >
                  <FontAwesomeIcon icon={faEnvelope} size="lg" color="#59A7C1" /> <span className="text-[#59A7C1]">Contact Me</span></a>
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