import Construction from "../components/Construction";
import { connect } from "react-redux";
import initialState from "../../initialState";

const mapStateToProps = state => {
  return {
    construction: state.projects.construction.length
      ? state.projects.construction
      : initialState.projects.construction
  };
};

export default connect(mapStateToProps)(Construction);
