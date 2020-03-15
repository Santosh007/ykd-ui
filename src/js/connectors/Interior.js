import Interior from "../components/Interior";
import { connect } from "react-redux";
import initialState from "../../initialState";

const mapStateToProps = state => {
  return {
    interior: state.projects.interior.length
      ? state.projects.interior
      : initialState.projects.interior
  };
};

export default connect(mapStateToProps)(Interior);
