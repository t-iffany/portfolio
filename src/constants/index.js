import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  // mongodb,
  git,
  figma,
  // docker,
  threejs,
  cst,
  vch,
} from "../assets";

import zenzonedemo from "../assets/zenzonedemo.mp4";
import binitdemo from "../assets/binitdemo.mp4";
import pawhubdemo from "../assets/pawhubdemo.mp4";
import jungle from "../assets/jungle.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const qualities = [
  {
    title: "Systems Implementation Experience",
    icon: web,
  },
  {
    title: "Collaborator/Team Player",
    icon: mobile,
  },
  {
    title: "User Empathy",
    icon: backend,
  },
  {
    title: "Communication",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Diploma of Web Development",
    company_name: "Lighthouse Labs, 2023",
    icon: vch,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      
    ],
  },
  {
    title: "Informatics Specialist",
    company_name: "Vancouver Coastal Health",
    icon: cst,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "Implemented an $800 million+ Oracle Cerner electronic health records application system that enhances medical care and safety for over 1.2 million B.C. residents. The system is among the largest and most complex healthcare projects in the country, revolutionizing the way patient information is managed and accessed. ",
      "Managed and facilitated the entire project lifecycle, including requirements gathering with subject matter experts, gap analysis, clinic design, build, validation, cutover, adoption, and go-live processes, ensuring adherence to project timeline and scope.",
      "Translated business and end-user needs into technical system requirements, and collaborated with design and build teams to create tailored solutions that met the unique demands of the project.",
      "Utilized Jira for tracking and managing user/system queries and issues, diligently following up with builders regarding break fixes and system changes using a change control process.",
      "Developed and executed comprehensive test scripts for systems integration testing, ensuring seamless compatibility among system components to achieve a reliable and effective implementation.",
    ],
  },
  {
    title: "Public Health Nurse",
    company_name: "Vancouver Coastal Health",
    icon: vch,
    iconBg: "#E6DEDD",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "Team Lead: Mass Immunization Clinics - Led and coordinated a team of at least 20 staff and volunteers to ensure smooth operation, flow of clinics to efficiently vaccinate 600+ people/day. Acted as clinical resource, provided consultation for medical complexities, and communicated operating procedures, vaccine information, best practice guidelines to physicians, nurses, and allied health immunizers.",
      "Team Lead: Case and Contact Tracing - Supervised a team of 18 nursing and allied health staff. Increased staff adoption of clinical systems by providing training, onboarding, and resolving staff queries with new workflows and tool updates. Presented daily and case reports to Medical Health Officers for consultation of Public Health guidance.",
      "Infant, Child, and Youth Services - Delivered comprehensive health promotion, disease prevention, assessment, intervention, and support services to families and children, fostering positive health outcomes. Advocated for clients and promoted client capacity building through education and development support. Identified and facilitated community resources appropriate to client needs.",
    ],
  },
  {
    title: "Bachelor of Science in Nursing (With Distinction)",
    company_name: "British Columbia Institute of Technology, 2019",
    icon: vch,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      
    ],
  },
  {
    title: "Bachelor of Science in Health/Nutrition, Minor in Kinesiology",
    company_name: "The University of British Columbia, 2015",
    icon: vch,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "Uppsala University, Sweden - International Exchange",
      "Universite Laval, Montreal - Explore French Immersion Program"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Loremashasf afsjlaskjk asdkjflsjflka.",
    name: "First Last",
    designation: "PM",
    company: "Comp",
    image: "image.jpg",
  },
];

const projects = [
  {
    name: "ZenZone 3D 🏆",
    description: [
      "nWPlus cmd-f 24-hour Hackathon 2nd Place Winner out of 44 projects + Most Creative Use of Twilio Award + Best Use of Cohere API Award 3rd place",
      `An interactive 3D game that promotes mental health and wellness, while providing a relaxing and calm atmosphere. We use Cohere's AI technology to reframe users' worries or stressors into positive and constructive affirmations. Users can explore the 3D environment using their avatar. Twilio API is used to send text notification reminders to users to be aware of their current emotional state and revisit the game - “Are you stressed? Visit ZenZone!”`,
      "Tech Stack: Spline, Cohere API, Twilio API, React, Typescript, Javascript, CSS, HTML, NodeJS, ExpressJS",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    demo: zenzonedemo,
    source_code_link: "https://github.com/t-iffany/cmdf-2023",
  },
  {
    name: "BinIt! 🏆",
    description: [
      "RootHacks 12-hour Hackathon Winner of Best Project With At Least One Women-Identifying or Non-Binary Member on the Team (WiCS Women in Tech Award)",
      "A full stack application that uses artificial intelligence (AI) to sort waste based on images. Users upload an image of their waste, then BinIt will use computer vision and machine learning algorithms to identify the type of waste and suggest the correct bin for disposal.",
      "Tech Stack: React, Javascript, CSS, HTML, Python, Flask"
    ],
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    demo: binitdemo,
    source_code_link: "https://github.com/t-iffany/roothacks-project",
  },
  {
    name: "PawHub",
    description: [
      "A full stack application for pet owners to connect with other pet owners, find local pet resources, and learn about different breeds and pet care.",
      "Includes: discussion board, explore page, map page, breed information page, video page",
      "Tech stack: Javascript, React, React Router, Ruby on Rails API, PostgreSQL, Bootstrap, Material UI, Axios, Google Maps Platform, YouTube Data API",
    ],
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "ruby on rails",
        color: "pink-text-gradient",
      },
    ],
    demo: pawhubdemo,
    source_code_link: "https://github.com/t-iffany/pawhub",
  },
  {
    name: "Jungle",
    description: [
      "A mini e-commerce application built with Rails 6.1 for purposes of learning Rails by example. Inherited and worked within an existing code base in a new language/framework. Extended and improved this web application without understanding the full source code. Fixed existing bugs and implemented new features. Utilized RSpec and Cypress testing frameworks.",
      "Tech stack: Ruby on Rails, RSpec, Cypress, HTML, SCSS",
    ],
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "ruby on rails",
        color: "pink-text-gradient",
      },
    ],
    demo: jungle,
    source_code_link: "https://github.com/t-iffany/jungle-rails",
  },
  // {
  //   name: "Interview Scheduler",
  //   description: [
  //     "Interview Scheduler is a client application built using React that allows users to create, edit, and delete interview appointments.",
  //     "Tech stack: Javascript, HTML, SCSS"
  //   ],
  //     tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "ruby on rails",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   demo: scheduler,
  //   source_code_link: "https://github.com/t-iffany/scheduler",
  // },
];

export { qualities, technologies, experiences, testimonials, projects };