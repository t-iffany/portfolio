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
    title: "Informatics Specialist",
    company_name: "Vancouver Coastal Health",
    icon: vch,
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
      "Team Lead: Mass Immunization Clinics",
      "Team Lead: Case and Contact Tracing",
      "Infant, Child, and Youth Services",
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
    name: "ZenZone 3D",
    description:
      "Web-nWPlus cmd-f 24-hour Hackathon 2nd Place Winner out of 44 projects + Most Creative Use of Twilio Award + Best Use of Cohere API Award 3rd place",
      "An interactive 3D game that promotes mental health and wellness, while providing a relaxing and calm atmosphere. We use Cohere's AI technology to reframe users' worries or stressors into positive and constructive affirmations. Users can explore the 3D environment using their avatar. Twilio API is used to send text notification reminders to users to be aware of their current emotional state and revisit the game - “Are you stressed? Visit ZenZone!”",
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
    image: zenzone,
    source_code_link: "https://github.com/",
  },
  {
    name: "BinIt!",
    description:
      "RootHacks 12-hour Hackathon Winner of Best Project With At Least One Women-Identifying or Non-Binary Member on the Team (WiCS Women in Tech Award)",
      "A full stack application that uses artificial intelligence (AI) to sort waste based on images. Users upload an image of their waste, then BinIt will use computer vision and machine learning algorithms to identify the type of waste and suggest the correct bin for disposal.",
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
    image: binit,
    source_code_link: "https://github.com/",
  },
  {
    name: "PawHub",
    description:
      "A full stack application for pet owners to connect with other pet owners, find local pet resources, and learn about different breeds and pet care.",
      "Includes: discussion board, explore page, map page, breed information page, video page",
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
    image: pawhub,
    source_code_link: "https://github.com/",
  },
];

export { qualities, technologies, experiences, testimonials, projects };