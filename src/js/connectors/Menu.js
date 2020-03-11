import Menu from "../components/Menu";
import { fetchProjectsData } from "../utils/actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    fetchData(project) {
      dispatch(fetchProjectsData(project));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Menu);
