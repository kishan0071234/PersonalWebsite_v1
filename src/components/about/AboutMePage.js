import ReceiptIcon from "@material-ui/icons/Receipt";
import Skills from "./Skills";
import Education from "./Education";
import { connect } from "react-redux";
import * as schoolAction from "../../redux/actions/profileActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import React from "react";
import Button from "@material-ui/core/Button";
import Resume from "../../images/Resume.pdf";
import ProfileImage from "../../images/profile2.jpg";

class AboutMePage extends React.Component {
  //const skillsData = require("../json/skills.json");
  componentDidMount() {
    this.props.actions.loadSchools();
  }
  render() {
    return (
      <div className="aboutme-container">
        <div>
          <section className="p-3 p-lg-5 theme-bg-light">
            <div className="aboutme-child-container">
              <div className="profile-teaser media flex-column flex-lg-row">
                <div className="media-body">
                  <h2 className="name font-weight-bold mb-1">Kishan Agarwal</h2>
                  <div className="tagline mb-6">Software Engineer</div>
                  <div className="bio mb-4">
                    I am a Software engineer with 3 years of experience in
                    backend development for building complex Microserices and
                    Web applications.I am very enthusiastic to learn new
                    technologies and flexible to work with teams.
                  </div>
                  <div className="mb-4">
                    <Button
                      target="_blank"
                      className="resumeButton"
                      href={Resume}
                    >
                      <ReceiptIcon />
                      <span className="d-none d-md-inline">View Resume</span>
                    </Button>
                  </div>
                </div>
                <img
                  className="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0"
                  src={ProfileImage}
                  alt=""
                ></img>
              </div>
            </div>
          </section>
        </div>
        <div className="education-container">
          <h1 className="education_header">Education</h1>
          <Education school={this.props.schools} />
        </div>

        <div className="skills-container">
          <h1 className="skills_header">Skills Overview</h1>
          <Skills />
        </div>
        <div className="footer">© 2020 Copyright: Kishan Agarwal</div>
      </div>
    );
  }
}

AboutMePage.propTypes = {
  schools: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    schools: state.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadSchools: bindActionCreators(schoolAction.loadSchools, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AboutMePage);
