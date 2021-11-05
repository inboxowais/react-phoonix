import AboutUs from './main';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import { makeSelectAuth } from './../../view.updater/selectors/auth.selectors'
import {  resetAuth } from './../../view.updater/actions/auth.actions'

const mapDispatchToProps = (dispatch) => ({
    resetAuth: () => dispatch(resetAuth())
});

const mapStateToProps = createStructuredSelector({
    auth : makeSelectAuth()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(AboutUs);
