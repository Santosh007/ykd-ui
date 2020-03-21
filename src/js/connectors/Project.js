import { connect } from "react-redux";
import Project from "../components/Project";
import initialState from "../../initialState";

const mapStateToProps = state => {
  return {
    project: state.projects.project.length
      ? state.projects.project
      : initialState.projects.project
  };
};

export default connect(mapStateToProps)(Project);
