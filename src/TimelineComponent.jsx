import React from "react";
import { FaBriefcase, FaHome, FaUser } from "react-icons/fa";

// Replace 'work.svg' with the correct path to your SVG file
// import { ReactComponent as SchoolIcon } from "./school.svg"; // Replace 'school.svg' with the correct path to your SVG file
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelineComponent = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Work Experience</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>Description of work experience...</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaHome />}
      >
        <h3 className="vertical-timeline-element-title">Work Experience</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>Description of work experience...</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaUser />}
      >
        <h3 className="vertical-timeline-element-title">Work Experience</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>Description of work experience...</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaHome />}
      >
        <h3 className="vertical-timeline-element-title">Work Experience</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>Description of work experience...</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaHome />}
      >
        <h3 className="vertical-timeline-element-title">Work Experience</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>Description of work experience...</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaHome />}
      >
        <h3 className="vertical-timeline-element-title">Work Experience</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>Description of work experience...</p>
      </VerticalTimelineElement>
      {/* Add more VerticalTimelineElement for each event */}
    </VerticalTimeline>
  );
};

export default TimelineComponent;
