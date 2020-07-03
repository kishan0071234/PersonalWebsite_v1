import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";

import { connect } from "react-redux";
import * as experienceAction from "../../redux/actions/profileActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class Experience extends React.Component {
  componentDidMount() {
    this.props.actions.loadExperience();
  }

  render() {
    return (
      <div className="experience-container">
        <div>
          <section className="p-3 p-lg-5 theme-bg-light">
            <div className="experience-child-container">
              <div className="profile-teaser media flex-column flex-lg-row">
                <div className="media-body">
                  <h2 className="name font-weight-bold mb-4">Experiences</h2>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <ExperienceTimeline experience={this.props.experience} />
        </div>
        <div className="footer">© 2020 Copyright: Kishan Agarwal</div>
      </div>
    );
  }
}

Experience.propTypes = {
  experience: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    experience: state.experience,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadExperience: bindActionCreators(
        experienceAction.loadExperience,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Experience);
