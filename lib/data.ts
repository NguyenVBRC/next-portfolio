import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "React Frontend Developer",
    location: "Milwaukee, WI",
    description:
      "Frontend Developer in title but Full Stack Developer in practice. My stack includes React, Next.js, Prisma, and MongoDB. Working with a small team where I'm a solo Frontend Developer tasked with completing all tasks that include UI work.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Web Developer (Freelance)",
    location: "Remote",
    description:
      "Career transition after completing a Web Developer course. Quit my recruiter role to enhance my programming skills full-time. Primary focus: MERN Tech Stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Technical Recruiter",
    location: "Brookfield, WI",
    description:
      "Full Cycle Recruitment in Human Resources. Screening, onboarding, reporting, and auditing candidate information throughout the recruitment life cycle.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "React",
  "Next.js",
  "Framer Motion",
  "Tailwind",
  "RESTful APIs",
  "HTML",
  "CSS",
  "TypeScript",
  "Node.js",
  "Git",
  "GitHub",
  "Prisma",
  "MongoDB",
] as const;
