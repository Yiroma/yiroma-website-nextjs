"use client";

import { motion } from "framer-motion";
import { BiographySign, ScrollIcon } from "@/components/SvgIcons";

const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "SCSS",
  "Tailwind CSS",
  "SQL",
  "Node.js",
  "Express.js",
];

const experiences = {
  exp1: {
    title: "Senior Javascript Engineer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam tempore dignissimos nam nisi at assumenda laudantium, laboriosam recusandae id.",
    date: "2024 - Present",
    company: "Apple Inc.",
  },
  exp2: {
    title: "Senior React Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam tempore dignissimos nam nisi at assumenda laudantium, laboriosam recusandae id.",
    date: "2019 - 2024",
    company: "Microsoft Inc.",
  },
  exp3: {
    title: "Freelancer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam tempore dignissimos nam nisi at assumenda laudantium, laboriosam recusandae id.",
    date: "2017 - 2019",
    company: "Yiroma consulting",
  },
};

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.6 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In cumque dolor eum odit
              alias iusto, ad, optio repellat magni ex officiis. Autem at quo nesciunt commodi
              deleniti, suscipit sunt laborum repudiandae facere sint? Temporibus explicabo
              laboriosam animi sequi quaerat! Aliquid praesentium quos corporis quaerat quasi
              deserunt atque odit, mollitia perferendis corrupti voluptate nostrum! Perferendis quis
              minima iste cum voluptas illo?
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ad voluptates in
              nemo aliquam ab.
            </span>
            {/* BIOGRAPHY SIGN SVG */}
            <div className="self-end">
              <BiographySign />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <ScrollIcon />
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILLS TITLE */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* SKILLS LIST */}
            <div className="flex gap-4 flex-wrap">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </div>
              ))}
            </div>
            {/* SKILLS SCROLL SVG */}
            <ScrollIcon />
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* EXPERIENCE TITLE */}
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            {/* EXPERIENCE LIST */}
            <div className="">
              {/* EXPERIENCE 1 */}
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between min-h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    {experiences.exp1.title}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">{experiences.exp1.desc}</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    {experiences.exp1.date}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 ml-3 rounded bg-white text-sm font-semibold w-fit">
                    {experiences.exp1.company}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>

              {/* EXPERIENCE 2 */}
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between min-h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    {experiences.exp2.title}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">{experiences.exp2.desc}</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    {experiences.exp2.date}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 ml-3 rounded bg-white text-sm font-semibold w-fit">
                    {experiences.exp2.company}
                  </div>
                </div>
              </div>

              {/* EXPERIENCE 3 */}
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between min-h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    {experiences.exp3.title}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">{experiences.exp3.desc}</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    {experiences.exp3.date}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 ml-3 rounded bg-white text-sm font-semibold w-fit">
                    {experiences.exp3.company}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:w-1/2">SVG</div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
