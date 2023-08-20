import Assessment from "./Assessment/Assessment";
import "./Assessments.css";
import PropTypes from "prop-types";
import New from "./New/New";
import { useState } from "react";

const Assessments = ({ assessments, setAssessments }) => {
  const [visible, setVisible] = useState(false);
  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  }
  return (
    <section className="assessments">
      <h3>My Assessment</h3>
      <div className="assessments-content">
        <div className="new-assessment">
          <button className="add-icon" onClick={openModal}>
            <img src="/assets/menu/add.svg" alt="add" />
          </button>
          <h4>New Assessment</h4>
          <p>
            From here you can add questions of multiple types like MCQs,
            subjective (text or paragraph)!
          </p>
          <New closeModal={closeModal} visible={visible} setAssessments={setAssessments} />
        </div>
        {assessments.map((assessment, index) => (
          <Assessment assessment={assessment} key={index} />
        ))}
      </div>
    </section>
  );
};

Assessments.propTypes = {
  assessments: PropTypes.array,
  setAssessments: PropTypes.func
};

export default Assessments;
