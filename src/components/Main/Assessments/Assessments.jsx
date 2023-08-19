import "./Assessments.css";

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
      },
    ],
  },
  {
    img: "",
    title: "",
    purpose: "",
    date: "",
    duration: "",
    questions: "",
    participants: [
      {
        name: "",
      },
    ],
  },
];

const Assessments = () => {
  return (
    <section className="assessments">
      <h3>My Assessment</h3>
      <div className="assessments-content">
        <div className="new-assessment">
          <div className="add-icon">
            <img src="/assets/menu/add.svg" alt="add" />
          </div>
          <h4>New Assessment</h4>
          <p>
            From here you can add questions of multiple types like MCQs,
            subjective (text or paragraph)!
          </p>
        </div>
        {assessments.map((assessment, index) => (
          <div className="assessment" key={index}>
            <div className="assessment-icon">
              <img src="/assets/menu/briefcase.svg" alt={assessment.title} />
            </div>
            <div className="assessment-main">
              <h4>{assessment.title}</h4>
              <div className="info">
                <p className="purpose">{assessment.purpose}</p>
                <div className="date">
                  <img src="/assets/menu/calendar_today.svg" alt="date_icon" />
                  <p>{assessment.date}</p>
                </div>
              </div>
              <div className="details">
                <div className="counts">
                  <div className="count">
                    <p>{assessment.duration}</p>
                    <p>Duration</p>
                  </div>
                  <div className="count">
                    <p>{assessment.questions}</p>
                    <p>Questions</p>
                  </div>
                </div>
                <div className="share-links">
                  <a href="#" className="link">
                    <img
                      src="/assets/menu/link.svg"
                      alt="share_icon"
                    />
                    <p>Share</p>
                  </a>
                  <div className="participants">
                    {assessment.participants.map((participant, index) => (
                      <div className="participant" key={index}>
                        {participant.photo ? (
                          <img src={participant.photo} alt="" />
                        ) : (
                          <p className="profile">LP</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Assessments;
