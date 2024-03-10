import React from "react";
import Header from "./Header";

function ContactUs() {
  return (
    <div>
      <Header />
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeHU-LdCLzQfYXVDf_IbXF2cOQyKmpM4pGmDuHp9Ud2Gvf_9w/viewform?embedded=true"
          width="100%"
          height="876"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default ContactUs;
