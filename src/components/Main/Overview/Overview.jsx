import PropTypes from "prop-types";
import './Overview.css'

const Overview = ({sections}) => {
  return (
    <section className="overview">
      <h3>Assessments Overview</h3>
      <div className="overview-container">
        {sections.map((overview) => (
          <div className="section" key={overview.title}>
            <h4 className="title">{overview.title}</h4>
            <div className="stats">
              <img
                src={`/assets/menu/${overview.imgSrc}`}
                alt=""
                className={`icon ${overview.imgClass && overview.imgClass}`}
              />
              {overview.stats.map((stat, index) => (
                <div className="stat" key={index}>
                  <div className="stat-number">
                    <p className="number">{stat.number}</p>
                    <p className="change">{stat.change && stat.change}</p>
                  </div>
                  <p className="stat-title">{stat.title && stat.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Overview.propTypes = {
    sections: PropTypes.array,
  };

export default Overview;
