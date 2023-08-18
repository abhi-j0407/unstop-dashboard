const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <header className="header">
          <div className="title">
            <h3 className="title-text">Assessment</h3>
          </div>
          <div className="tabs">
            <div className="tab active">My Assessments</div>
            <div className="tab">Unstop Assessments</div>
          </div>
        </header>
        <div className="content">
          <section className="overview">
            <h3>Assessments Overview</h3>
            <div className="overview-container">
              {/* Total */}
              <div className="section">
                <h4 className="title">Total Assessment</h4>
                <div className="stats">
                  <img src="/assets/menu/view_agenda.svg" alt="" className="icon" />
                  <div className="stat">
                    <div className="stat-number">
                      <p className="number">34</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Candidates */}
              <div className="section">
                <h4 className="title">Candidates</h4>
                <div className="stats">
                  <img src="/assets/menu/group.svg" alt="" className="icon" />
                  <div className="stat">
                    <div className="stat-number">
                      <p className="number">11,145</p>
                      <p className="change">+89</p>
                    </div>
                    <p className="stat-title">Total Candidate</p>
                  </div>
                  <div className="stat">
                    <div className="stat-number">
                      <p className="number">114</p>
                      <p className="change">+89</p>
                    </div>
                    <p className="stat-title">Who Attempted</p>
                  </div>
                </div>
              </div>
              {/* Candidates Source */}
              <div className="section">
                <h4 className="title">Candidates Source</h4>
                <div className="stats">
                  <img src="/assets/menu/captive_portal.svg" alt="" className="icon source" />
                  <div className="stat">
                    <div className="stat-number">
                      <p className="number">11,000</p>
                      <p className="change">+89</p>
                    </div>
                    <p className="stat-title">E-mail</p>
                  </div>
                  <div className="stat">
                    <div className="stat-number">
                      <p className="number">145</p>
                      <p className="change">+89</p>
                    </div>
                    <p className="stat-title">Social Share</p>
                  </div>
                  <div className="stat">
                    <div className="stat-number">
                      <p className="number">145</p>
                      <p className="change">+89</p>
                    </div>
                    <p className="stat-title">Unique Link</p>
                  </div>
                </div>
              </div>
              {/* Purpose */}
              <div className="section">
                <h4 className="title">Total Purpose</h4>
                <div className="stats">
                  <img src="/assets/menu/link.svg" alt="" className="icon link" />
                  <div className="stat">
                    <div className="stat-number">
                      <p className="number">34</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="assessments"></section>
        </div>
      </div>
    </div>
  );
};

export default Main;
