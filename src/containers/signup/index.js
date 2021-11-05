import SignUp from './signup';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { signUp, resetAuth } from './../../view.updater/actions/auth.actions'
import { makeSelectSignUpError, makeSelectSignUpResponse, makeSelectSignUpLoading } from './../../view.updater/selectors/auth.selectors'


const mapDispatchToProps = (dispatch) => ({
    signUp: (data) => dispatch(signUp(data)),
    resetAuth: () => dispatch(resetAuth())
});

const mapStateToProps = createStructuredSelector({
    signUpResponse: makeSelectSignUpResponse(),
    signUpLoading: makeSelectSignUpLoading(),
    signUpError: makeSelectSignUpError()

});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(SignUp);
