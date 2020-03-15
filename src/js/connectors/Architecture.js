import Architecture from "../components/Architecture";
import { connect } from "react-redux";
import initialState from "../../initialState";

const mapStateToProps = state => {
  return {
    architecture: state.projects.architecture.length
      ? state.projects.architecture
      : initialState.projects.architecture
  };
};

export default connect(mapStateToProps)(Architecture);
