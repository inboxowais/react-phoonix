import SignUp from './submit.recovery.code';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';


const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = createStructuredSelector({


});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(SignUp);
