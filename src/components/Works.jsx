import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { projects } from '../constants';
import {fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import '../index.css';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      {/* <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My recent projects showcasing my skills and experience across full stack web development.
        </motion.p>
      </div> */}
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
      >
      {/* <div className="max-w-3xl mx-auto px-6"> */}
      <div className="w-full flex mt-8">
        <div className="grid lg:grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <div key={project.name} className="flex flex-col md:flex-row mb-6 bg-[#5C9EAD] p-6 rounded-lg">
              {/* Video/GIF */}
              <div className="w-full md:w-9/20 bg-[#5C9EAD] overflow-hidden rounded-lg">
                <video width="100%" height="240" controls>
                  <source
                    src={project.demo}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Description and Buttons */}
              <div className="w-full md:w-11/20 flex flex-col justify-center px-4 md:pl-8 py-4 bg-[#5C9EAD]">
                <h3 className="text-xl font-semibold mb-2 bg-[#5C9EAD]">
                  {project.name}
                </h3>
                <p className="text-white text-[17px] max-w-3xl leading-[30px] bg-[#5C9EAD]">{project.description}</p>
                &nbsp;
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline bg-[#5C9EAD]"
                >
                  Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </motion.p>
    </>
  )
}

export default SectionWrapper(Works, "");