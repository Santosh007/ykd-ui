import Architecture from "../components/Architecture";
import { connect } from "react-redux";
import { fetchProjectDetails } from "../utils/actions";
import initialState from "../../initialState";

const mapStateToProps = state => {
  return {
    architecture: state.projects.architecture.length
      ? state.projects.architecture
      : initialState.projects.architecture
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
)(Architecture);
