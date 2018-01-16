import { connect } from "react-redux";
import { login, signup} from "../store/actions/useractioncreator";
import SignupForm from "../components/molecules/SignupForm";

function mapStateToProps({ user }){
	return {
		...user
	}
}

export default connect(mapStateToProps, {login, signup})(SignupForm);
