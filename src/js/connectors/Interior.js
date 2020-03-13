import Interior from "../components/Interior";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    interior: state.projects.interior
  };
};

export default connect(mapStateToProps)(Interior);
