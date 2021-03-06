import { connect } from 'react-redux'
import { signUp } from '../actions/auth'
import SignUp from '../components/SignUp'

function mapStateToProps(state) {
  return {
    user: state.User,
    auth: state.Auth,
  }
}

export default connect(mapStateToProps, { signUp })(SignUp)
