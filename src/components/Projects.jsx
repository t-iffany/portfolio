import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { projects } from '../constants';
import {fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import '../index.css';

const Projects = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
        <p className={styles.sectionSubText}>My portfolio</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      {/* </motion.div> */}

      {/* <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My recent projects showcasing my skills and experience across full stack web development.
        </motion.p>
      </div> */}
      
      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
      > */}
      {/* <div className="max-w-3xl mx-auto px-6"> */}
      <div className="w-full flex mt-8">
        <div className="grid lg:grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <div key={project.name} className="flex flex-col md:flex-row mb-6 bg-[transparent] p-6">
              {/* Video/GIF */}
              <div className="w-full md:w-9/20 overflow-hidden">
                {project.demo.endsWith('.mp4') ?
                <video width="100%" height="240" controls className="rounded-lg">
                  <source
                    src={project.demo}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                :
                project.demo.endsWith('.png') || project.demo.endsWith('.jpeg') || project.demo.endsWith('.gif') ?
                <img src={project.demo} alt={project.name} width="100%" height="auto" className="rounded-lg" />
                :
                null
              }
              </div>

              {/* Description and Buttons */}
              <div className="w-full md:w-11/20 flex flex-col px-4 md:pl-8 ">
                <h3 className="text-xl font-semibold mb-2 text-secondary mt-2 md:mt-0 lg:mt-0">
                  {project.name}
                </h3>
                <ul className="max-w-3xl leading-[30px] list-disc ml-4" style={{ lineHeight: 1.7 }}>
                  {project.points.map((point, index) => (
                  <li
                    key={`description-point-${index}`}
                    className="text-tertiary text-[15px] pl-1 tracking-wider"
                  >
                    {point}
                  </li>
                ))}
                </ul>
                &nbsp;
                <button
                  onClick={() => window.open(project.source_code_link, "_blank")}
                  className="cursor-pointer bg-[#72A38A] py-1 px-6 w-fit text-white text-[18px]
                  rounded-xl hover:text-[#72A38A] hover:bg-[#F2F2F2] transition-colors duration-300"
                >
                  Repo
                </button>
                {/* <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline bg-[#59A7C1]"
                >
                  Repository
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </motion.p> */}
    </>
  )
}

export default SectionWrapper(Projects, "projects");