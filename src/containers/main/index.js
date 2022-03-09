import AboutUs from './main';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import { makeSelectAuth,makeSelectProfile } from './../../view.updater/selectors/auth.selectors'
import {  resetAuth,getProfile } from './../../view.updater/actions/auth.actions'
import { findSingleUser } from './../../view.updater/actions/applets.actions'
import { makeSelectSingleUser } from './../../view.updater/selectors/applets.selectors'

const mapDispatchToProps = (dispatch) => ({
    resetAuth: () => dispatch(resetAuth()),
    getProfile : (data) => dispatch(getProfile(data)),
    findSingleUser : (data) => dispatch(findSingleUser(data))
});

const mapStateToProps = createStructuredSelector({
    auth : makeSelectAuth(),
    profile : makeSelectProfile()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(AboutUs);
