import React from "react";
import { skills, experiences, socialLinks } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="sky-blue-purple-gradient_text font-semibold drop-shadow">
          Sabrun
        </span>
      </h1>
      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          Software Engineer based in New York City, with frontend and backend
          experience specializing in delivering applications utilizing Python,
          Java, JS, and more.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl bg-blue-300" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Professional Experience</h3>
        <div>
          <p className="mt-5 flex flex-col gap-3 text-slate-500">
            I've been leveling up my skills by working at some amazing companies
            and collabing with some amazing people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experiences) => (
              <VerticalTimelineElement
                key={experiences.company_name}
                date={experiences.date}
                icon={
                  <a
                    key={experiences.name}
                    href={experiences.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block-container w-40 h-20 no-underline"
                  >
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experiences.icon}
                        alt={experiences.company_name}
                        className={
                          experiences === "meta"
                            ? "w-[70%] h-[70%] object-contain"
                            : "w-[90%] h-[90%] object-contain"
                        }
                      />
                    </div>
                  </a>
                }
                iconStyle={{ background: experiences.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experiences.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experiences.title}
                  </h3>

                  <p
                    className="text-black-500 font-medium font-base "
                    style={{ margin: 0 }}
                  >
                    {experiences.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experiences.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text text-center">My Socials</h3>

        <div className="mt-16 flex flex-wrap gap-12 justify-center">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block-container w-40 h-20 no-underline"
            >
              <div key={social.name} className="block-container w-40 h-20">
                <div className="btn-back rounded-xl bg-blue-300" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={social.iconUrl}
                    alt={social.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                  <p className="font-poppins font-semibold text-blue-500">
                    {social.name}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
