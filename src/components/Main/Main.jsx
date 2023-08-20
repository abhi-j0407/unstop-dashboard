import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Main.css";
import Overview from "./Overview/Overview";
import Assessments from "./Assessments/Assessments";

const headerTabs = ["My Assessments", "Unstop Assessments"];

const sections = [
  {
    title: "Total Assessment",
    imgSrc: "view_agenda.svg",
    stats: [
      {
        number: "34",
      },
    ],
  },
  {
    title: "Candidates",
    imgSrc: "group.svg",
    stats: [
      {
        number: "11,145",
        change: "+89",
        title: "Total Candidate",
      },
      {
        number: "114",
        change: "+89",
        title: "Who Attempted",
      },
    ],
  },
  {
    title: "Candidates Source",
    imgSrc: "captive_portal.svg",
    imgClass: "source",
    stats: [
      {
        number: "11,000",
        change: "+89",
        title: "E-mail",
      },
      {
        number: "145",
        change: "+89",
        title: "Social Share",
      },
      {
        number: "145",
        change: "+89",
        title: "Unique Link",
      },
    ],
  },
  {
    title: "Total Purpose",
    imgSrc: "link.svg",
    imgClass: "link",
    stats: [
      {
        number: "11",
      },
    ],
  },
];

const assessmentsStatic = [
  {
    title: "Math Assessment",
    purpose: "Job",
    date: "20 Apr 2023",
    duration: "00",
    questions: "00",
    participants: [
      {
        name: "Lokesh Pal",
        photo: "",
      },
    ],
  },
  {
    title: "Math Assessment",
    purpose: "Job",
    date: "20 Apr 2023",
    duration: "00",
    questions: "00",
    participants: [
      {
        name: "Lokesh Pal",
        photo: "",
      },
      {
        name: "Lokesh Pal",
        photo: "",
      },
      {
        name: "Lokesh Pal",
        photo: "",
      },
    ],
  },
];

const Main = ({ setShowMenu }) => {
  // const [activeTab, setActiveTab] = useState("My Assessments");
  const [assessments, setAssessments] = useState([]);
  const [showOverview, setShowOverview] = useState(false);
  const activeTab = "My Assessments";

  useEffect(() => {
    if (assessments.length > 0)
      localStorage.setItem("assessments", JSON.stringify(assessments));
    else localStorage.setItem("assessments", JSON.stringify(assessmentsStatic));
  }, [assessments]);

  useEffect(() => {
    setAssessments(JSON.parse(localStorage.getItem("assessments")));
  }, []);

  return (
    <div className="main">
      <div className="main-container">
        <header className="header">
          <div className="title">
            <div
              className="menu-icon"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <img src="/assets/menu/segment.svg" alt="" />
            </div>
            <h3 className="title-text">Assessment</h3>
          </div>
          <div className="tabs">
            {headerTabs.map((tab) => (
              <div className={`tab ${tab === activeTab && "active"}`} key={tab}>
                {tab}
              </div>
            ))}
          </div>
        </header>
        <div className="content">
          <Overview sections={sections} show={showOverview} />
          <Assessments
            assessments={assessments}
            setAssessments={setAssessments}
            setShow={setShowOverview}
          />
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  setShowMenu: PropTypes.func,
};

export default Main;
