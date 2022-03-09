import { createSelector } from 'reselect';

const selectApplet = (state) => state.get('appletsReducer');

const makeSelectChannels = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('channelResponse')
);

const makeSelectChannelsLoading = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('channelResponseLoading')
);

const makeSelectChannelsError = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('channelResponseError')
);

const makeSelectCreateApplet = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('createAppletResponse')
);

const makeSelectCreateAppletLoading = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('createAppletLoading')
);

const makeSelectCreateAppletError = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('createAppletError')
);

const makeSelectApplets = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('allApplets')
);

const makeSelectAppletsLoading = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('allAppletsLoading')
);

const makeSelectAppletsError = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('allAppletsError')
);

const makeSelectUpdateApplet = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('updateApplet')
);

const makeSelectAppletUpdateAppletLoading = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('updateAppletLoading')
);

const makeSelectUpdateAppletError = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('updateAppletError')
);

const makeSelectDeleteApplet = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('deleteApplet')
);

const makeSelectDeleteAppletLoading = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('deleteAppletLoading')
);

const makeSelectDeleteAppletError = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('deleteAppletError')
);

const makeSelectSingleApplets = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('singleApplet')
);

const makeSelectSingleAppletsLoading = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('singleAppletLoading')
);

const makeSelectSingleAppletsError = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('singleAppletError')
);


const makeSelectUserChannels = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('userChannels')
);

const makeSelectUserChannelsLoading = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('userChannelsLoading')
);

const makeSelectUserChannelsError = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('userChannelsError')
);

const makeSelectDeleteUserChannel = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('deleteUserChannel')
);

const makeSelectSingleUser = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('singleUser')
)

const makeSelectRetriveSingleAppletAsFile = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('stepAsFile')
)

const makeSelectRetriveSingleAppletAsFileLoading = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('stepAsFileLoading')
)

const makeSelectRetriveSingleAppletAsFileError = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get("stepAsFileError")
)

const makeSelectSaveStepAsFile = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('saveStepAsFile')
)

const makeSelectSaveStepAsFileLoading = () => createSelector(
    selectApplet,
    (selectApplet) => selectApplet.get('saveStepAsFileLoading')
)



export {
    selectApplet,
    makeSelectChannels,
    makeSelectChannelsLoading,
    makeSelectChannelsError,
    makeSelectCreateApplet,
    makeSelectCreateAppletLoading,
    makeSelectCreateAppletError,
    makeSelectApplets,
    makeSelectAppletsLoading,
    makeSelectAppletsError,
    makeSelectUpdateApplet,
    makeSelectUpdateAppletError,
    makeSelectAppletUpdateAppletLoading,
    makeSelectDeleteApplet,
    makeSelectDeleteAppletLoading,
    makeSelectDeleteAppletError,
    makeSelectSingleApplets,
    makeSelectSingleAppletsLoading,
    makeSelectSingleAppletsError,
    makeSelectUserChannels,
    makeSelectUserChannelsLoading,
    makeSelectUserChannelsError,
    makeSelectDeleteUserChannel,
    makeSelectSingleUser,
    makeSelectRetriveSingleAppletAsFile,
    makeSelectRetriveSingleAppletAsFileLoading,
    makeSelectSaveStepAsFileLoading,
    makeSelectSaveStepAsFile
}

