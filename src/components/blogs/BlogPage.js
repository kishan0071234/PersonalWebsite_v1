import React from "react";

import { connect } from "react-redux";
import * as blogAction from "../../redux/actions/profileActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import BlogList from "./BlogList";

class BlogPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadBlogs();
  }

  render() {
    return (
      <div className="experience-container">
        <div>
          <section className="p-3 p-lg-5 theme-bg-light">
            <div className="experience-child-container">
              <div className="profile-teaser media flex-column flex-lg-row">
                <div className="media-body">
                  <h2 className="name font-weight-bold mb-4">Blog</h2>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="project-container">
          <BlogList blogs={this.props.blogs} />
        </div>
        <div className="footer">© 2020 Copyright: Kishan Agarwal</div>
      </div>
    );
  }
}

BlogPage.propTypes = {
  blogs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    blogs: state.blogs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadBlogs: bindActionCreators(blogAction.loadBlogs, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
