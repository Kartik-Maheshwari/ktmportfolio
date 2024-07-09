import { FaGithub, FaLinkedin } from "react-icons/fa";
import aboutImage from "../components/AboutMe/KTM.png";

import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
  SiHackerrank,
} from "react-icons/si";

const links = [
  {
    image: FaGithub,
    url: "https://github.com/Kartik-Maheshwari",
  },
  {
    image: FaLinkedin,
    url: "https://www.linkedin.com/in/kartik-maheshwari-53275723b/",
  },
  {
    image: SiLeetcode,
    url: "https://leetcode.com/u/KartikMaheshwari07/",
  },
  {
    image: SiGeeksforgeeks,
    url: "https://www.geeksforgeeks.org/user/kartikmaheshwari07/",
  },
  {
    image: SiCodechef,
    url: "https://www.codechef.com/users/kartikm_07",
  },
  {
    image: SiHackerrank,
    url: "https://www.hackerrank.com/profile/CSB_21B0121089",
  },
];
const skills = [
  { name: "ReactJs", icon: "./images/Reactlogo.png" },
  { name: "Node.js", icon: "./images/node.png" },
  { name: "HTML", icon: "./images/htmllogo.png" },
  { name: "MongoDB", icon: "./images/mongo.png" },
  { name: "Python", icon: "./images/python.png" },
  { name: "Redux", icon: "./images/Redux.png" },
  { name: "Git", icon: "./images/git.png" },
  { name: "Graphql", icon: "./images/Graph.png" },
  { name: "JavaScript", icon: "./images/JSlogo.png" },
  { name: "CSS", icon: "./images/csslogo.png" },
];

const experience = [
  {
    year: "2024",
    works: [
      {
        name: "SDE Intern",
        company: "Ecom Express Pvt. Ltd.",
        desc: "Starting a new Postition",
      },
    ],
  },
  {
    year: "2022",
    works: [
      {
        name: "Web Developer Intern",
        company: "CodeClause",
        desc: "Developed responsive design layouts using HTML, CSS, and JavaScript to enhance customer experiences on web platforms.",
      },
      {
        name: "Salesforce Administrator Virtual Internship ",
        company: "SmartInternz",
        desc: "Completed a virtual internship focusing on Salesforce administration, performing hands-on tasks as a Salesforce Administrator and collecting Super badges on Trailhead platform. ",
      },
    ],
  },
];

const about = {
  show: true,
  heading: "About Me",
  imageLink: aboutImage,
  imageSize: 375,
  message:
    "I am Kartik Maheshwari, a passionate Computer Science student at ABES Engineering College, set to graduate in 2025 with a strong academic record. My technical skills encompass programming languages like C++, C, Python, and SQL, and I'm proficient in web development with HTML, CSS, JavaScript, MongoDB, ReactJS, and NodeJS. I have hands-on experience from internships, including developing responsive web designs and Salesforce administration. I am ready to create practical solutions using modern technologies and have ability to work in team environments, and strong attention to detail. I am looking for an IT-related internship with a forward-moving company.",
  resume:
    "https://drive.google.com/file/d/1G-jbuIiogyMWIFHlKl-jRJj5EBe1jR2E/view?usp=drive_link",
};
export { links, skills, experience, about };
