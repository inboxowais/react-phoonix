import ForgotPassword from './forgot.password';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';


const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = createStructuredSelector({


});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(ForgotPassword);
