import React from "react";
import PageLayout from "../../components/PageLayout";
import CircleIcon from "../../assets/images/pd-green-circle.svg";

import "./index.scss";

function About() {
  return (
    <PageLayout>
      <div className="about__details">
        A proficient <b>IT specialist</b> with over <b>4 years</b> of hands-on
        experience in implementing the <b>frontend of web-based applications</b>
        . I am skilled in working in dynamic, fast-paced environments, and
        possess a total of 8+ years of expertise in the IT field.
      </div>
    </PageLayout>
  );
}

export default About;
