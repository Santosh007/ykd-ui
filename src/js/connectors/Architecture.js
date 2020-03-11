import Architecture from "../components/Architecture";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    architecture: state.projects.architecture
  };
};

export default connect(
  mapStateToProps,
  null
)(Architecture);
