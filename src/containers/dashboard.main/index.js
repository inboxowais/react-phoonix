import DashboardMain from './dashboard.main';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {  getProfile } from './../../view.updater/actions/auth.actions'
import { makeSelectProfile } from './../../view.updater/selectors/auth.selectors'

const mapDispatchToProps = (dispatch) => ({
    getProfile : (data) => dispatch(getProfile(data))
});

const mapStateToProps = createStructuredSelector({
   profile: makeSelectProfile()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(DashboardMain);
