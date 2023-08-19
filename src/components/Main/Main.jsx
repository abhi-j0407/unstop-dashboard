// import { useState } from "react";
import './Main.css'
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

const assessments = [
  {
    img: "",
    title: "Math Assessment",
    purpose: "Job",
    date: "20 Apr 2023",
    duration: "00",
    questions: "00",
    participants: [
      {
        name: "Lokesh Pal",
        photo: "",
      }
    ],
  },
  {
    img: "",
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
      }
    ],
  },
];

const Main = () => {
  // const [activeTab, setActiveTab] = useState("My Assessments");
  const activeTab = "My Assessments";
  return (
    <div className="main">
      <div className="main-container">
        <header className="header">
          <div className="title">
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
          <Overview sections={sections} />
          <Assessments assessments={assessments}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
