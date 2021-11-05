import Login from './login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { login } from './../../view.updater/actions/auth.actions'
import { signUp, resetAuth } from './../../view.updater/actions/auth.actions'
import { makeSelectAuth, makeSelectAuthLoading, makeSelectAuthError } from './../../view.updater/selectors/auth.selectors'


const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(login(data)),
    signUp: (data) => dispatch(signUp(data)),
    resetAuth: () => dispatch(resetAuth())
});

const mapStateToProps = createStructuredSelector({
    authResponse: makeSelectAuth(),
    authError: makeSelectAuthError(),
    authLoading: makeSelectAuthLoading()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Login);
