import Dashboard from './dashboard';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { getAllApplets,updateApplet,deleteApplet,findSingleUser,addNotification,addSubscriberNotification } from './../../view.updater/actions/applets.actions'
import { makeSelectApplets,makeSelectAppletsLoading,makeSelectAppletsError,makeSelectAppletUpdateAppletLoading,makeSelectUpdateApplet,makeSelectDeleteApplet,makeSelectSingleUser } from './../../view.updater/selectors/applets.selectors'
import { makeSelectAuth } from './../../view.updater/selectors/auth.selectors'
const mapDispatchToProps = (dispatch) => ({
    getAllApplets: (data) => dispatch(getAllApplets(data)),
    updateApplet : (data) => dispatch(updateApplet(data)),
    deleteApplet : (id,data) => dispatch(deleteApplet(id,data)),
    findSingleUser : (data) => dispatch(findSingleUser(data)),
    addNotification : (data) => dispatch(addNotification(data)),
    addSubscriberNotification : (data) => dispatch(addSubscriberNotification(data))
});

const mapStateToProps = createStructuredSelector({
    applets : makeSelectApplets(),
    appletsLoading : makeSelectAppletsLoading(),
    appletsError : makeSelectAppletsError(),
    auth : makeSelectAuth(),
    updateAppletResponse : makeSelectUpdateApplet(),
    updateAppletLoading : makeSelectAppletUpdateAppletLoading(),
    deleteAppletResponse : makeSelectDeleteApplet(),
    singleUser : makeSelectSingleUser()
    
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Dashboard);
