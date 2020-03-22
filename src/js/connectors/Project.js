import { connect } from "react-redux";
import { fetchProjectDetails } from "../utils/actions";
import Project from "../components/Project";
import initialState from "../../initialState";

const mapStateToProps = state => {
  return {
    project: state.projects.project.length
      ? state.projects.project
      : initialState.projects.project
  };
};

const mapDisptchToProps = dispatch => {
  return {
    fetchData(project) {
      dispatch(fetchProjectDetails(project));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDisptchToProps
)(Project);
