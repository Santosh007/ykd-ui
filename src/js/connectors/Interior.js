import Interior from "../components/Interior";
import { connect } from "react-redux";
import { fetchProjectDetails } from "../utils/actions";
import initialState from "../../initialState";

const mapStateToProps = state => {
  return {
    interior: state.projects.interior.length
      ? state.projects.interior
      : initialState.projects.interior
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData(project) {
      dispatch(fetchProjectDetails(project));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interior);
