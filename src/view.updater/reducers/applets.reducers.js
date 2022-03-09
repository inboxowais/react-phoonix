import Immutable from 'immutable';
import {
    GET_CHANNELS,
    GET_CHANNELS_SUCCESS,
    GET_CHANNELS_ERROR,
    CREATE_APPLET,
    CREATE_APPLET_SUCCESS,
    CREATE_APPLET_ERROR,
    RESET_APPLET,
    GET_ALL_APPLETS,
    GET_ALL_APPLETS_ERROR,
    GET_ALL_APPLETS_SUCCESS,
    UPDATE_APPLET,
    UPDATE_APPLET_ERROR,
    UPDATE_APPLET_SUCCESS,
    DELETE_APPLET,
    DELETE_APPLET_ERROR,
    DELETE_APPLET_SUCCESS,
    GET_SINGLE_APPLET,
    GET_SINGLE_APPLET_SUCCESS,
    GET_SINGLE_APPLET_ERROR,
    CREATE_USER_CHANNEL,
    CREATE_USER_CHANNEL_SUCCESS,
    CREATE_USER_CHANNEL_ERROR,
    DELETE_USER_CHANNEL,
    DELETE_USER_CHANNEL_ERROR,
    DELETE_USER_CHANNEL_SUCCESS,
    FIND_SINGLE_USER,
    FIND_SINGLE_USER_SUCCESS,
    FIND_SINGLE_USER_ERROR,
    RETRIEVE_STEP_AS_FILE,
    RETRIEVE_STEP_AS_FILE_ERROR,
    RETRIEVE_STEP_AS_FILE_SUCCESS,
    SAVE_STEPS_AS_FILE,
    SAVE_STEPS_AS_FILE_ERROR,
    SAVE_STEPS_AS_FILE_SUCCESS


} from './../actions/applets.actions'

const initialState = Immutable.fromJS({
    channelResponse: false,
    channelResponseLoading: false,
    channelResponseError: false,
    createAppletResponse: false,
    createAppletLoading: false,
    createAppletError: false,
    allApplets: false,
    allAppletsLoading: false,
    allAppletsError: false,
    updateApplet: false,
    updateAppletLoading: false,
    updateAppletError: false,
    deleteApplet: false,
    deleteAppletLoading: false,
    deleteAppletError: false,
    singleApplet: false,
    singleAppletsLoading: false,
    singleAppletError: false,
    createChannel: false,
    createChannelLoading: false,
    createChannelError: false,
    userChannels: false,
    userChannelsLoading: false,
    userChannelsError: false,
    deleteUserChannel: false,
    singleUser: false,
    stepAsFile: false,
    stepAsFileLoading: false,
    stepAsFileError: false,
    saveStepAsFile: false,
    saveStepAsFileLoading: false,
    saveStepAsError: false
});

function appletsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHANNELS:
            return state
                .set('channelResponseLoading', true)
                .set('channelResponseError', false)
        case GET_CHANNELS_SUCCESS:
            return state
                .set('channelResponseLoading', false)
                .set('channelResponseError', true)
                .set("channelResponse", action.response)
        case GET_CHANNELS_ERROR:
            return state
                .set('channelResponseLoading', false)
                .set('channelResponseError', action.error)
        case CREATE_APPLET:
            return state
                .set('createAppletLoading', true)
                .set('createAppletError', false)
        case CREATE_APPLET_SUCCESS:
            return state
                .set('createAppletLoading', false)
                .set('createAppletError', true)
                .set("createAppletResponse", action.response)
        case CREATE_APPLET_ERROR:
            return state
                .set('createAppletLoading', false)
                .set('createAppletError', action.error)
        case CREATE_USER_CHANNEL:
            return state
                .set('userChannelsLoading', true)
                .set('userChannelsError', false)
        case CREATE_USER_CHANNEL_SUCCESS:
            return state
                .set('userChannelsLoading', false)
                .set('userChannelsError', false)
                .set("userChannels", action.response)
        case CREATE_USER_CHANNEL_ERROR:
            return state
                .set('userChannelsLoading', false)
                .set('userChannelsError', action.error)
        case GET_ALL_APPLETS:
            return state
                .set('allAppletsLoading', true)
                .set('allAppletsError', false)
        case GET_ALL_APPLETS_SUCCESS:
            return state
                .set('allAppletsLoading', false)
                .set('allAppletsError', true)
                .set("allApplets", action.response)
        case GET_ALL_APPLETS_ERROR:
            return state
                .set('allAppletsLoading', false)
                .set('allAppletsError', action.error)

        case UPDATE_APPLET:
            return state
                .set('updateAppletLoading', true)
                .set('updateAppletError', false)
        case UPDATE_APPLET_SUCCESS:
            return state
                .set('updateAppletLoading', false)
                .set('updateAppletError', true)
                .set("updateApplet", action.response)
        case UPDATE_APPLET_ERROR:
            return state
                .set('updateAppletLoading', false)
                .set('updateAppletError', action.error)

        case DELETE_APPLET:
            return state
                .set('deleteAppletLoading', true)
                .set('deleteAppletError', false)
        case DELETE_APPLET_SUCCESS:

            return state
                .set('deleteAppletLoading', false)
                .set('deleteAppletError', true)
                .set("deleteApplet", action.response)
        case DELETE_APPLET_ERROR:
            return state
                .set('deleteAppletLoading', false)
                .set('updateAppletError', action.error)
        case GET_SINGLE_APPLET:
            return state
                .set('singleAppletLoading', true)
                .set('singleAppletError', false)
                .set("singleApplet", false)
        case GET_SINGLE_APPLET_ERROR:
            return state
                .set('singleAppletLoading', false)
                .set('singleAppletError', action.error)
                .set("singleApplet", false)
        case GET_SINGLE_APPLET_SUCCESS:
            return state
                .set('singleAppletLoading', false)
                .set('singleAppletError', false)
                .set("singleApplet", action.response)
        case DELETE_USER_CHANNEL_SUCCESS:
            return state
                .set('deleteUserChannel', action.response)
        case FIND_SINGLE_USER_SUCCESS:
            return state.set('singleUser', action.response)

        case RETRIEVE_STEP_AS_FILE:
            return state
                .set('stepAsFileLoading', true)
                .set('stepAsFileError', false)
        case RETRIEVE_STEP_AS_FILE_ERROR:
            return state
                .set('stepAsFileLoading', false)
                .set('stepAsFileError', true)
        case RETRIEVE_STEP_AS_FILE_SUCCESS:
            return state
                .set('stepAsFile', action.response)
                .set('stepAsFileLoading', false)
                .set('stepAsFileError', false)

        case SAVE_STEPS_AS_FILE:
            debugger
            return state
                .set('saveStepAsFileLoading', true)
                .set('saveStepAsFileError', false)
        case SAVE_STEPS_AS_FILE_ERROR:
            return state
                .set('saveStepAsFileLoading', false)
                .set('saveStepAsFileError', true)
        case SAVE_STEPS_AS_FILE_SUCCESS:
            return state
                .set('saveStepAsFile', action.response)
                .set('saveStepAsFileLoading', false)
                .set('saveStepAsFileError', false)

        case RESET_APPLET:
            return state
                .set('createAppletLoading', false)
                .set('createAppletError', true)
                .set("createAppletResponse", false)
                .set('singleApplet', false)
                .set('singleAppletLoading', false)
                .set("singleAppletError", false)
                .set("updateApplet", false)
                .set('stepAsFile', false)
                .set('stepAsFileLoading', false)
                .set('stepAsFileError', false)

        default:
            return state;
    }
}

export default appletsReducer