import Construction from "../components/Construction";
import { connect } from "react-redux";
import initialState from "../../initialState";
import { fetchProjectDetails } from "../utils/actions";

const mapStateToProps = state => {
  return {
    construction: state.projects.construction.length
      ? state.projects.construction
      : initialState.projects.construction
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
)(Construction);
