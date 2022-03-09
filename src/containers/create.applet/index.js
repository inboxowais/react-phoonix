import Login from './create.applet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { getChannel, createApplet, resetApplet, getSingleApplet, updateApplet,addNotification,retrieveStepAsFile,saveStepsAsFile,addSubscriberNotification } from './../../view.updater/actions/applets.actions'
import { makeSelectChannels, makeSelectChannelsLoading, makeSelectCreateApplet, makeSelectCreateAppletLoading, makeSelectSingleAppletsError, makeSelectSingleApplets, makeSelectDeleteAppletLoading, makeSelectSingleAppletsLoading,makeSelectAppletUpdateAppletLoading,makeSelectUpdateApplet,makeSelectSingleUser } from './../../view.updater/selectors/applets.selectors'
import { makeSelectAuth } from './../../view.updater/selectors/auth.selectors'


const mapDispatchToProps = (dispatch) => ({
    getChannel: (data) => dispatch(getChannel(data)),
    createApplet: (data,isTemplate) => dispatch(createApplet(data,isTemplate)),
    resetApplet: () => dispatch(resetApplet()),
    getSingleApplet: (id,template) => dispatch(getSingleApplet(id,template)),
    updateApplet: (data) => dispatch(updateApplet(data)),
    addNotification : (data) => dispatch(addNotification(data)),
    retrieveStepAsFile : (data) => dispatch(retrieveStepAsFile(data)),
    saveStepsAsFile : (data) => dispatch(saveStepsAsFile(data)),
    addSubscriberNotification : (data) => dispatch(addSubscriberNotification(data))
});

const mapStateToProps = createStructuredSelector({
    auth: makeSelectAuth(),
    channels: makeSelectChannels(),
    channelLoading: makeSelectChannelsLoading(),
    createAppletsResponse: makeSelectCreateApplet(),
    createAppletLoading: makeSelectCreateAppletLoading(),
    singleApplets: makeSelectSingleApplets(),
    singleAppletsLoading: makeSelectSingleAppletsLoading(),
    singleAppletsError: makeSelectSingleAppletsError(),
    updateAppletsLoading : makeSelectAppletUpdateAppletLoading(),
    updateApplets : makeSelectUpdateApplet(),
    singleUser : makeSelectSingleUser(),

});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Login);
