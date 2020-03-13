import Construction from "../components/Construction";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { construction: state.projects.construction };
};

export default connect(mapStateToProps)(Construction);
