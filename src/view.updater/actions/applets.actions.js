export const GET_CHANNELS = "GET_CHANNELS";
export const GET_CHANNELS_SUCCESS = "GET_CHANNELS_SUCCESS";
export const GET_CHANNELS_ERROR = "GET_CHANNELS_ERROR";
export const CREATE_APPLET = "CREATE_APPLET";
export const CREATE_APPLET_SUCCESS = "CREATE_APPLET_SUCCESS";
export const CREATE_APPLET_ERROR = "CREATE_APPLET_ERROR";
export const RESET_APPLET = "RESET_APPLET"
export const GET_ALL_APPLETS = "GET_ALL_APPLETS"
export const GET_ALL_APPLETS_SUCCESS = "GET_ALL_APPLETS_SUCCESS"
export const GET_ALL_APPLETS_ERROR = "GET_ALL_APPLETS_ERROR"
export const UPDATE_APPLET = "UPDATE_APPLET";
export const UPDATE_APPLET_SUCCESS = "UPDATE_APPLET_SUCCESS";
export const UPDATE_APPLET_ERROR = "UPDATE_APPLET_ERROR";
export const DELETE_APPLET = "DELETE_APPLET";
export const DELETE_APPLET_SUCCESS = "DELETE_APPLET";
export const DELETE_APPLET_ERROR = "DELETE_APPLET";
export const GET_SINGLE_APPLET = "GET_SINGLE_APPLET";
export const GET_SINGLE_APPLET_ERROR = "GET_SINGLE_APPLET_ERROR";
export const GET_SINGLE_APPLET_SUCCESS = "GET_SINGLE_APPLET_SUCCESS";
export const CREATE_USER_CHANNEL = "CREATE_USER_CHANNEL";
export const CREATE_USER_CHANNEL_ERROR = "CREATE_USER_CHANNEL_ERROR";
export const CREATE_USER_CHANNEL_SUCCESS = "CREATE_USER_CHANNEL_SUCCESS";
export const DELETE_USER_CHANNEL = "DELETE_USER_CHANNEL";
export const DELETE_USER_CHANNEL_ERROR = "DELETE_USER_CHANNEL_ERROR";
export const DELETE_USER_CHANNEL_SUCCESS = "DELETE_USER_CHANNEL_SUCCESS";
export const FIND_SINGLE_USER_SUCCESS = "FIND_SINGLE_USER_SUCCESS"
export const FIND_SINGLE_USER_ERROR = "FIND_SINGLE_USER_ERROR"
export const FIND_SINGLE_USER = "FIND_SINGLE_USER"
export const ADD_NOTIFICATION = "ADD_NOTIFICATION"
export const SAVE_STEPS_AS_FILE = "SAVE_STEPS_AS_FILE"
export const SAVE_STEPS_AS_FILE_SUCCESS = "SAVE_STEPS_AS_FILE_SUCCESS"
export const SAVE_STEPS_AS_FILE_ERROR = "SAVE_STEPS_AS_FILE_ERROR"
export const RETRIEVE_STEP_AS_FILE = "RETRIEVE_STEP_AS_FILE"
export const RETRIEVE_STEP_AS_FILE_SUCCESS = "RETRIEVE_STEP_AS_FILE_SUCCESS"
export const RETRIEVE_STEP_AS_FILE_ERROR = "RETRIEVE_STEP_AS_FILE_ERROR"
export const ADD_SUBSCRIBER_NOTIFICATION = "ADD_SUBSCRIBER_NOTIFICATION"



export function getChannel(data) {
    return {
        type: GET_CHANNELS,
        url: "user/my-channels",
        method: "POST",
        data
    }
}

export function createApplet(data, template) {

    return {
        type: CREATE_APPLET,
        url: template ? "user/template/create" : "user/applet/create",
        method: "POST",
        data
    }
}

export function createUserChannel(data) {
    return {
        type: CREATE_USER_CHANNEL,
        url: `user/channel/create`,
        method: "POST",
        data
    }
}







export function updateApplet(data, template) {

    return {
        type: UPDATE_APPLET,
        url: template ? `user/template/update/${data.id}` : `user/applet/update/${data.id}`,
        method: "PUT",
        data
    }
}

export function resetApplet() {

    return {
        type: RESET_APPLET,

    }
}
export function getAllApplets(data, isTemplate) {
    return {
        type: GET_ALL_APPLETS,
        url: isTemplate ? `user/templates/all` : `user/applets/all`,
        method: "POST",
        data
    }
}

export function getSingleApplet(id, template) {
    return {
        type: GET_SINGLE_APPLET,
        url: template ? `user/template/${id}` : `user/applet/${id}`,
        method: "GET"
    }
}

export function deleteApplet(data) {
    return {
        type: DELETE_APPLET,
        url: `user/applet/delete/${data.id}`,
        method: "DELETE",
        data: {
            "user_id": data.user_id
        }
    }
}

export function deleteUserChannel(data) {
    return {
        type: DELETE_USER_CHANNEL,
        url: `user/channel/delete/${data.channelId}`,
        method: "DELETE",
        data: {
            "user_id": data.user_id
        }
    }
}

export function findSingleUser(userId) {
    return {
        type: FIND_SINGLE_USER,
        url: `user/users/find_one/${userId}`,
        method: "GET"
    }
}

export function addNotification(data) {
    return {
        type: ADD_NOTIFICATION,
        url: `user/users/add_notification`,
        method: "PUT",
        data
    }
}

export function addSubscriberNotification(data) {
    return {
        type : ADD_SUBSCRIBER_NOTIFICATION,
        url : `/user/users/add_notifications`,
        method : "PUT",
        data
    }
}

export function saveStepsAsFile(data) {
    return {
        type: SAVE_STEPS_AS_FILE,
        url: `user/steps_as_file`,
        method: "POST",
        data: data
    }
}

export function retrieveStepAsFile(data) {
    return {
        type: RETRIEVE_STEP_AS_FILE,
        url: `user/retrieve_steps_as_file`,
        method: "POST",
        data
    }
}