import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

const personalDetails = [
  {
    label: "Name: ",
    value: "Giancarlo Scalisi",
  },
  {
    label: "Address: ",
    value: "Germany",
  },
  {
    label: "Email: ",
    value: "giancarloscalisi2@gmail.com",
  },
  {
    label: "Mobil-Nr: ",
    value: "+49 15110659590",
  },
];

const jobSummery =
  "Fullstack Software Developer with more than 1 year of experience";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px" }}
            end={{ transform: "translateX(0px" }}
          >
            <h3>Fullstack Developer</h3>
            <p>{jobSummery}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px" }}
            end={{ transform: "translateX(0px" }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(665px" }}
            end={{ transform: "translateX(0px" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaReact size={60} color="var(--orange-theme-main-color)" />
              </div>
              <div>
                <FaHtml5 size={60} color="var(--orange-theme-main-color)" />
              </div>
              <div>
                <FaCss3 size={60} color="var(--orange-theme-main-color)" />
              </div>
              <div>
                <DiJavascript1
                  size={60}
                  color="var(--orange-theme-main-color)"
                />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
