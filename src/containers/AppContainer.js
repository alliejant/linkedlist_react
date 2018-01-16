import { connect } from "react-redux";
import App from "../components/App";

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user,
    company: reduxState.company
  };
}

export default connect(mapStateToProps)(App);
