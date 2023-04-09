import { faConfluence } from "@fortawesome/free-brands-svg-icons";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  // threejs,
  ruby,
  sql,
  express,
  rails,
  ejs,
  postgresql,
  mysql,
  cypress,
  jquery,
  storybook,
  jest, 
  mocha,
  chai,
  rspec,
  jira,
  slack,
  visio,
  vite,
  spline,
  python,
  flask,
  confluence,
  cerner,
  cst,
  vch,
  zenzonedemo,
  binitdemo,
  pawhubdemo,
  jungle,
  scheduler,
  beautisense,
} from "../assets";

export const navLinks = [
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "attributes",
    title: "Attributes",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const attributes = [
  {
    title: "Adaptability",
    icon: web,
    points: [
      "I excel at quickly learning and adapting to new workflows and information systems. As a nurse, I often wear multiple hats while problem solving, and navigating complex situations with accuracy and efficiency."
    ],
  },
  {
    title: "User Empathy",
    icon: mobile,
    points: [
      "I worked closely with end-users to support systems build, ensured their needs are met, and identified issues to design teams. When creating projects, I always empathize with end-users and place myself in their shoes.",
    ],
  },
  {
    title: "Communication",
    icon: backend,
    points: [
      "I clearly communicated technical information to a wide range of stakeholders. I have led and coordinated teams, fostering open communication channels and resolving conflicts to achieve team goals.",
    ],
  },
  {
    title: "Collaboration",
    icon: creator,
    points: [
      "I worked effectively with cross-functional teams to deliver successful project outcomes. I am a team player who leverages diverse perspectives and skills to work collaboratively with colleagues.",
    ],
  },
];

const languages = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
];

const frameworks = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "EJS",
    icon: ejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "jQuery",
    icon: jquery,
  },
  {
    name: "Rails",
    icon: rails,
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "Spline",
    icon: spline,
  },
  {
    name: "Flask",
    icon: flask,
  },
];

const systems = [
  {
    name: "Git",
    icon: git,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
];

const testing = [
  {
    name: "Storybook",
    icon: storybook,
  },
  {
    name: "Cypress",
    icon: cypress,
  },
  {
    name: "Mocha",
    icon: mocha,
  },
  {
    name: "Chai",
    icon: chai,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "RSpec",
    icon: rspec,
  },
];

const tools = [
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Confluence",
    icon: confluence,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Cerner",
    icon: cerner,
  },
  {
    name: "Visio",
    icon: visio,
  },
  {
    name: "Slack",
    icon: slack,
  },
];

const experiences = [
  {
    title: "Diploma of Web Development",
    company_name: "Lighthouse Labs",
    icon: vch,
    iconBg: "#383E56",
    date: "2022 - Feb 2023",
    points: [
      
    ],
  },
  {
    title: "Informatics Specialist",
    company_name: "Clinical & Systems Transformation, Vancouver Coastal Health",
    icon: cst,
    iconBg: "#383E56",
    date: "2021 - 2022",
    points: [
      "Software application system implementation",
      "Project management",
      "Worked through entire project lifecycle",
      "Translated business needs into technical system requirements",
    ],
  },
  {
    title: "Public Health Nurse",
    company_name: "Vancouver Coastal Health",
    icon: vch,
    iconBg: "#E6DEDD",
    date: "2020 - Present",
    points: [
      "Team Lead for Mass Immunization Clinics",
      "Team Lead for Case and Contact Tracing",
      "Infant, Child, and Youth Services",
    ],
  },
  {
    title: "Bachelor of Science in Nursing",
    company_name: "British Columbia Institute of Technology, With Distinction",
    icon: vch,
    iconBg: "#383E56",
    date: "2019",
    points: [
    ],
  },
  {
    title: "Bachelor of Science in Health and Nutrition",
    company_name: "The University of British Columbia",
    icon: vch,
    iconBg: "#383E56",
    date: "2015",
    points: [
      "Major: Nutritional Sciences, Minor: Kinesiology"
,      "Uppsala University, Sweden - International Exchange",
      "Universite Laval, Montreal - French Immersion Intensive"
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
    points: [
      "nWPlus cmd-f 24-hour Hackathon", 
      "2nd Place Winner out of 44 projects + Most Creative Use of Twilio Award + Best Use of Cohere API Award",
      `An interactive 3D game that promotes mental health and wellness. 
      We use AI technology to reframe users' worries or stressors into positive and constructive affirmations. 
      Users can explore the 3D environment using their avatar. Text notification reminders are sent to users to be aware 
      of their current emotional state and revisit the game.`,
      "React, Typescript, Javascript, CSS, HTML, NodeJS, ExpressJS, Spline, Cohere API, Twilio API",
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
    points: [
      "RootHacks 12-hour Hackathon", 
      "Winner of Best Project With At Least One Women-Identifying or Non-Binary Member on the Team (WiCS Women in Tech Award)",
      "A full stack application that uses AI to sort waste based on images. Users upload an image of their waste, then BinIt will use computer vision and machine learning algorithms to identify the type of waste and suggest the correct bin for disposal.",
      "React, Javascript, CSS, HTML, Python, Flask"
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
    points: [
      "A full stack application for pet owners to connect with other pet owners, find local pet resources, and learn about different breeds and pet care.",
      "Includes: discussion board, explore page, map page, breed information page, video page",
      "Javascript, React, Ruby on Rails, PostgreSQL, Bootstrap, Material UI, Axios, Google Maps API, YouTube API",
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
    name: "BeautiSense",
    points: [
      "Idea Track Submission for ELC Accessible Beauty Hackathon",
      "An application that uses AI, facial recognition, and computer vision to provide personalized makeup guidance and accessibility features. It promotes independence for both visually impaired individuals and makeup enthusiasts.",
      "Python, OpenCV, Javascript",
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
    demo: beautisense,
    source_code_link: "https://devpost.com/software/beautisense",
  },
  {
    name: "Jungle",
    points: [
      "A mini e-commerce application built for purposes of learning Rails by example. Inherited and worked within an existing code base in a new language/framework. Extended and improved this web application without understanding the full source code. Fixed existing bugs and implemented new features. Utilized RSpec and Cypress testing frameworks.",
      "Ruby on Rails, RSpec, Cypress, HTML, SCSS",
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
  {
    name: "Interview Scheduler",
    points: [
      "An application that allows users to create, edit, and delete interview appointments.",
      "Javascript, HTML, SCSS, React"
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
    demo: scheduler,
    source_code_link: "https://github.com/t-iffany/scheduler",
  },
];

export { attributes, languages, frameworks, systems, testing, tools, experiences, testimonials, projects };