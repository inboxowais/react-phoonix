import Settings from './setting';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { getProfile, updateProfile } from './../../view.updater/actions/auth.actions'
import { makeSelectProfile, makeSelectProfileLoading, makeSelectProfileError, makeSelectUpdateProfile, makeSelectUpdateProfileError, makeSelectUpdateProfileLoading } from './../../view.updater/selectors/auth.selectors'
 import { createUserChannel,getChannel,deleteUserChannel } from './../../view.updater/actions/applets.actions'
 import { makeSelectUserChannelsLoading, makeSelectUserChannels, makeSelectUserChannelsError,makeSelectChannels,makeSelectChannelsLoading,makeSelectDeleteUserChannel } from './../../view.updater/selectors/applets.selectors'

const mapDispatchToProps = (dispatch) => ({
    getProfile: (userId) => dispatch(getProfile(userId)),
    updateProfile: (data) => dispatch(updateProfile(data)),
    createUserChannel : (data) => dispatch(createUserChannel(data)),
    getChannel : (data) => dispatch(getChannel(data)),
    deleteUserChannel : (data) => dispatch(deleteUserChannel(data))
    // createChannel : (data) => dispatch(createChannel(data))
});

const mapStateToProps = createStructuredSelector({
    profile: makeSelectProfile(),
    profileLoading: makeSelectProfileLoading(),
    profileError: makeSelectProfileError(),
    updateProfileResponse: makeSelectUpdateProfile(),
    updateProfileLoading: makeSelectUpdateProfileLoading(),
    updateProfileError: makeSelectUpdateProfileError(),
    userChannels: makeSelectUserChannels(),
    userChannelsLoading: makeSelectUserChannelsLoading(),
    userChannelsError: makeSelectUserChannelsError(),
    channels : makeSelectChannels(),
    channelsLoading : makeSelectChannelsLoading(),
    deleteUserChannelResponse : makeSelectDeleteUserChannel()

});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Settings);
