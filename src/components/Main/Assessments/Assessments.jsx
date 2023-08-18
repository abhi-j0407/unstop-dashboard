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
      <div className="content">
        <div className="new-assessment">New</div>
        {assessments.map((assessment, index) => (
          <div className="assessment" key={index}>
            <img
              src="/assets/menu/captive_portal.svg"
              alt={assessment.title}
              className="icon"
            />
            <div className="content">
              <h4>{assessment.title}</h4>
              <div className="info">
                <p className="purpose">{assessment.purpose}</p>
                <div className="date">
                  <img src="/assets/menu/captive_portal.svg" alt="date_icon" />
                  <p className="date-text">{assessment.date}</p>
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
                      src="/assets/menu/captive_portal.svg"
                      alt="share_icon"
                    />
                    <p>Share</p>
                  </a>
                  <div className="participants">
                    {assessments.participants.map((participant, index) => (
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
