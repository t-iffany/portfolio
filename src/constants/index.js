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
  // ruby,
  // sql,
  // express,
  // rails,
  // ejs,
  // postgresql,
  // mysql,
  // cypress,
  // jquery,
  // storybook,
  // jest, 
  // mocha,
  // chai,
  // rspec,
  // jira,
  // slack,
  // visio,
  // vite,
  // spline,
  // python,
  // flask,
  cst,
  vch,
  zenzonedemo,
  binitdemo,
  pawhubdemo,
  jungle,
} from "../assets";

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
    // date: "Jan 2021 - Feb 2022",
    points: [
      "Team Lead for Mass Immunization Clinics",
      "Team Lead for Case and Contact Tracing",
      "Nurse for Infant, Child, and Youth Services",
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
    points: [
      "nWPlus cmd-f 24-hour Hackathon", 
      "2nd Place Winner out of 44 projects + Most Creative Use of Twilio Award + Best Use of Cohere API Award 3rd place",
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
    points: [
      "RootHacks 12-hour Hackathon", 
      "Winner of Best Project With At Least One Women-Identifying or Non-Binary Member on the Team (WiCS Women in Tech Award)",
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
    points: [
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
    points: [
      "A mini e-commerce application built for purposes of learning Rails by example. Inherited and worked within an existing code base in a new language/framework. Extended and improved this web application without understanding the full source code. Fixed existing bugs and implemented new features. Utilized RSpec and Cypress testing frameworks.",
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
  //   points: [
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