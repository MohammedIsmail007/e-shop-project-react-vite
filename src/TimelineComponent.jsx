import React from "react";
import {
  FaAndroid,
  FaBriefcase,
  FaDigitalOcean,
  FaHome,
  FaUser,
  FaVoicemail,
} from "react-icons/fa";

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
        <h3 className="vertical-timeline-element-title">OUR PRODUCTS</h3>
        <h4 className="vertical-timeline-element-subtitle">
          ANY WHERE EVRYWHERE
        </h4>
        <p> LET'S GO DIGITALLY</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaHome />}
      >
        <h3 className="vertical-timeline-element-title">AT YOUR DOORSTEP</h3>
        <h4 className="vertical-timeline-element-subtitle">
          ORDER THROUGH YOUR PHONE DIGITALLY
        </h4>
        <p>OUR SHOP ANYWHERE IN YOUR PLACE...</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaUser />}
      >
        <h3 className="vertical-timeline-element-title">USER FRIENDLY</h3>
        <h4 className="vertical-timeline-element-subtitle">
          YOUR WEALTH HIS OUR HEALTH
        </h4>
        <p>YOU ARE OUR GIFTS...</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaAndroid />}
      >
        <h3 className="vertical-timeline-element-title">
          WE ALWAYS FOR OUR'S VALUABLE CUSTOMER
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>24/7 Customer service...</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaVoicemail />}
      >
        <h3 className="vertical-timeline-element-title">YOUR SATISFACTION</h3>
        <h4 className="vertical-timeline-element-subtitle">
          IS OUR SATISFACTION
        </h4>
        <p>....</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaDigitalOcean />}
      >
        <h3 className="vertical-timeline-element-title">LET'S GO DIGITALLY</h3>
        <h4 className="vertical-timeline-element-subtitle">&</h4>
        <p>ECO-FRIENDLY...</p>
      </VerticalTimelineElement>
      {/* Add more VerticalTimelineElement for each event */}
    </VerticalTimeline>
  );
};

export default TimelineComponent;
