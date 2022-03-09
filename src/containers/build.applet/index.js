import BuildApplet from './build.applet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { login } from './../../view.updater/actions/auth.actions'
import { updateApplet, resetApplet, getSingleApplet,retrieveStepAsFile,saveStepsAsFile } from './../../view.updater/actions/applets.actions'
import { makeSelectAppletUpdateAppletLoading, makeSelectAppletsError, makeSelectUpdateApplet, makeSelectSingleAppletsError, makeSelectSingleApplets, makeSelectSingleAppletsLoading,makeSelectRetriveSingleAppletAsFile,makeSelectSaveStepAsFile,makeSelectSaveStepAsFileLoading } from './../../view.updater/selectors/applets.selectors'


const mapDispatchToProps = (dispatch) => ({
    updateApplet: (data,template) => dispatch(updateApplet(data,template)),
    resetApplet: () => dispatch(resetApplet()),
    getSingleApplet: (data,template) => dispatch(getSingleApplet(data,template)),
    retrieveStepAsFile : (data) => dispatch(retrieveStepAsFile(data)),
    saveStepsAsFile : (data) => dispatch(saveStepsAsFile(data))
    
});

const mapStateToProps = createStructuredSelector({
    updateAppletsResponse: makeSelectUpdateApplet(),
    updateAppletLoading: makeSelectAppletUpdateAppletLoading(),
    singleApplet: makeSelectSingleApplets(),
    singleAppletAsFile : makeSelectRetriveSingleAppletAsFile(),
    saveStepAsFileResponse : makeSelectSaveStepAsFile(),
    saveStepAsFileResponseLoading : makeSelectSaveStepAsFileLoading()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(BuildApplet);
