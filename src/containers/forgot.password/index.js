import ForgotPassword from './forgot.password';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { forgetPassword,resetAuth } from './../../view.updater/actions/auth.actions'
import { makeSelectForgetPasswordResponse,makeSelectForgetPasswordError,makeSelectForgetPasswordLoading } from './../../view.updater/selectors/auth.selectors'


const mapDispatchToProps = (dispatch) => ({
    forgetPassword: (data) => dispatch(forgetPassword(data)),
    resetAuth : () => dispatch(resetAuth())
});

const mapStateToProps = createStructuredSelector({
    forgetPasswordResponse : makeSelectForgetPasswordResponse(),
    forgetPasswordError : makeSelectForgetPasswordError(),
    forgetPasswordLoading : makeSelectForgetPasswordLoading()

});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(ForgotPassword);
