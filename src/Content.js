// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import reactjs from "./assets/images/Skills/react.png";
// import nodejs from "./assets/images/Skills/node.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import js from "./assets/images/Skills/js.png";
import redux from "./assets/images/Skills/redux.png";
import git from "./assets/images/Skills/git.png";
import css from "./assets/images/Skills/css.png";
import html from "./assets/images/Skills/html.png";
import bootstrap from "./assets/images/Skills/bootstrap.png";

import vue from "./assets/images/Skills/vue.png"

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img5.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "ABDULRAZAQ",
    LastName: "SODIQ",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "2+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Figma",
        para: "Implementation of figma design",
        logo: figma,
      },
      // {
      //   name: "Node js",
      //   para: "Consume node.js api's",
      //   logo: nodejs,
      // },
      {
        name: "HTML",
        para: "Lorem ipsum text  dummy",
        logo: html,
      },
      
      {
        name: "CSS",
        para: "Lorem ipsum text  dummy",
        logo: css,
      },
      {
        name: "TailwindCSS",
        para: "Lorem ipsum text  dummy",
        logo: tailwind,
      },
      {
        name: "JavaScript",
        para: "Lorem ipsum text  dummy",
        logo: js,
      },
      {
        name: "Vue js",
        para: "Lorem ipsum text  dummy",
        logo: vue,
      },
      {
        name: "Redux js",
        para: "Lorem ipsum text  dummy",
        logo: redux,
      },
      {
        name: "Git",
        para: "Lorem ipsum text  dummy",
        logo: git,
      },
      {
        name: "Bootstrap",
        para: "Lorem ipsum text  dummy",
        logo: bootstrap,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "I have the knowledge and experience working with both React and Vue, this allows me to choose the right tool for the job based on project requirements. My proficient in component-based development, promotes reusability and maintainability of code.",
        logo: services_logo1,
      },
      {
        title: "Responsive Design",
        para: " I excel in creating responsive, user-friendly website's and Cross-Browser Compatibility. My ability to build interactive and visually appealing components is crucial for creating engaging web applications",
        logo: services_logo1,
      },
      {
        title: "Team Collaboration",
        para: "I work well in teams, collaborating with designers, backend developers, and other stakeholders to bring projects to fruition. My communication skills help facilitate effective teamwork.",
        logo: services_logo1,
      },
      {
        title: "Continuous Learning",
        para: "I stay up-to-date with the latest trends and best practices in frontend development, ensuring that i can leverage new technologies and techniques to improve my work.",
        logo: services_logo1,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "The Elector",
        image: project1,
        link: "http://theelector.com.ng/",
      },
      {
        title: "SupremeData",
        image: project2,
        link: "https://supreme-dc.vercel.app/",
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphicn, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I'm dedicated to delivering high-quality results that align with your project's objectives. Let's collaborate to bring your vision to life!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "abdulrazaqsodiq2015@gmail.com",
        icon: GrMail,
        link: "mailto:abdulrazaqsodiq2015@gmail.com",
      },
      {
        text: "+234 81050 82299",
        icon: MdCall,
        link: "https://wa.me/message/ZSYBRQ5XRO7JN1",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
