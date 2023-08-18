const assessments = [
    {
        img: '',
        title: '',
        type: '',
        date: '',
        duration: '',
        questions: '',
        participants: [
            {
                name: '',
                photo: ''
            }
        ]
    }
];

const Assessments = () => {
    return <section className="assessments">
        <h3>My Assessment</h3>
        <div className="content">
            <div className="new-assessment">
                New
            </div>

        </div>
  </section>;
};

export default Assessments;
