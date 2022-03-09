import Dashboard from './create';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { getAllApplets } from './../../view.updater/actions/applets.actions'
import { makeSelectApplets,makeSelectAppletsLoading,makeSelectAppletsError } from './../../view.updater/selectors/applets.selectors'

const mapDispatchToProps = (dispatch) => ({
    getAllApplets: (data,isTemplate) => dispatch(getAllApplets(data,isTemplate)),
});

const mapStateToProps = createStructuredSelector({
    applets : makeSelectApplets(),
    appletsLoading : makeSelectAppletsLoading(),
    appletsError : makeSelectAppletsError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Dashboard);
