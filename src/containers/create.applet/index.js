import Login from './create.applet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { login } from './../../view.updater/actions/auth.actions'


const mapDispatchToProps = (dispatch) => ({
   
});

const mapStateToProps = createStructuredSelector({
   
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Login);
