import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';


const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    className="timeline-bg"
    contentStyle={{ background: "transparent", padding: "20px" }}
    contentArrowStyle={{ borderRight: "none" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg, borderRadius: "50%" }}
    icon={
      <div className="flex justify-center items-center w-full h-full"
      style={{maxWidth: "none", backgroundColor: "transparent"}}>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-full h-full object-contain items-center"
          style={{ backgroundColor: "transparent", objectFit: "cover", borderRadius: "50%"}}
        />
      </div>
    }
  >
    <div>
      <h3 className="text-secondary text-[19px] font-bold">
        {experience.title}
      </h3>
      <p className="company-name" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-2 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-tertiary text-[13px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>

  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work + education</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");