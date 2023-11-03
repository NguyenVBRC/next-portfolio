"use client";

import React from "react";
import SectionHeading from "../SectionHeading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 xl:text-gray-50 text-gray-900 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "slate-900",
                boxShadow: "none",
                border: "2px solid black",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid black",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "lightgray",
                color: "black",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-black">{item.title}</h3>
              <p className="font-normal !mt-0 text-gray-900">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
