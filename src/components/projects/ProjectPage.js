import React from "react";

import { connect } from "react-redux";
import * as projectAction from "../../redux/actions/profileActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class ProjectPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadProjects();
  }

  render() {
    return (
      <div className="experience-container">
        <div>
          <section className="p-3 p-lg-5 theme-bg-light">
            <div className="experience-child-container">
              <div className="profile-teaser media flex-column flex-lg-row">
                <div className="media-body">
                  <h2 className="name font-weight-bold mb-4">
                    Github Projects
                  </h2>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="project-container">
          <ProjectDetails projects={this.props.projects} />
        </div>
        <div className="footer">© 2020 Copyright: Kishan Agarwal</div>
      </div>
    );
  }
}

ProjectPage.propTypes = {
  projects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadProjects: bindActionCreators(projectAction.loadProjects, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
import ProjectDetails from "./ProjectDetails";
