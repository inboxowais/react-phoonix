export const GET_BLOGS = "GET_BLOGS";
export const GET_BLOGS_SUCCESS = "GET_BLOGS_SUCCESS";
export const GET_BLOGS_ERROR = "BLOGS_ERROR"
export const GET_EVENTS = "GET_EVENTS";
export const GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS";
export const GET_EVENTS_ERROR = "GET_EVENTS_ERROR"
export const GET_NEWS = "GET_NEWS";
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
export const GET_NEWS_ERROR = "GET_NEWS_ERROR"
export const GET_OFFICES = "GET_OFFICES";
export const GET_OFFICES_SUCCESS = "GET_OFFICES_SUCCESS";
export const GET_OFFICES_ERROR = "GET_OFFICES_ERROR";
export const GET_MEMBERS = "GET_MEMBERS";
export const GET_MEMBERS_SUCCESS = "GET_MEMBERS_SUCCESS";
export const GET_MEMBERS_ERROR = "GET_MEMBERS_ERROR";
export const GET_SURVEYS = "GET_SURVEYS";
export const GET_SURVEYS_SUCCESS = "GET_SURVEYS_SUCCESS";
export const GET_SURVEYS_ERROR = "GET_SURVEYS_ERROR";
export const GET_POST_DETAILS = "GET_POST_DETAILS";
export const GET_POST_DETAILS_SUCCESS = "GET_POST_DETAILS_SUCCESS";
export const GET_POST_DETAILS_ERROR = "GET_POST_DETAILS_ERROR";
export const GET_REPORTS = "GET_REPORTS";
export const GET_REPORTS_SUCCESS = "GET_REPORTS_SUCCESS";
export const GET_REPORTS_ERROR = "GET_SURVEYS_ERROR";
export const GET_SURVEY_DETAILS = "GET_SURVEY_DETAILS";
export const GET_SURVEY_DETAILS_SUCCESS = "GET_SURVEY_DETAILS_SUCCESS";
export const GET_SURVEY_DETAILS_ERROR = "GET_SURVEY_DETAILS_ERROR";
export const GET_PAGE_DETAILS = "GET_PAGE_DETAILS";
export const GET_PAGE_DETAILS_SUCCESS = "GET_PAGE_DETAILS_SUCCESS";
export const GET_PAGE_DETAILS_ERROR = "GET_PAGE_DETAILS_ERROR";
export const GET_MEDIA = "GET_MEDIA";
export const GET_MEDIA_SUCCESS = "GET_MEDIA_SUCCESS";
export const GET_MEDIA_ERROR = "GET_MEDIA_ERROR";
export const SET_USER = "SET_USER";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_ERROR = "GET_MEDIA_ERROR";

export function getBlogPosts(data) {
    return {
        type: GET_BLOGS,
        url: "post?type=Blog",
        method: "GET",
        data
    }
}

export function getEventsPosts(data) {
    return {
        type: GET_EVENTS,
        url: "post?type=event",
        method: "GET",
        data
    }
}
export function getNewsPosts(data) {
    return {
        type: GET_NEWS,
        url: "post?type=news",
        method: "GET",
        data
    }
}
export function getOfficesPosts(data) {
    return {
        type: GET_OFFICES,
        url: "election-center",
        method: "GET",
        data
    }
}
export function getMembersPosts(data) {
    return {
        type: GET_MEMBERS,
        url: "auth/users",
        method: "GET",
        data
    }
}
export function getSurveysPosts(data) {
    return {
        type: GET_SURVEYS,
        url: "survey",
        method: "GET",
        data
    }
}

export function getPostDetails(data) {
    return {
        type: GET_POST_DETAILS,
        url: `post/${data._id}`,
        method: "GET",
        data
    }
}
export function getReports(data) {
    return {
        type: GET_REPORTS,
        url: "voting-report",
        method: "GET",
        data
    }
}
export function getSurveyDetails(data) {
    return {
        type: GET_SURVEY_DETAILS,
        url: `survey/${data._id}`,
        method: "GET",
        data
    }
}
export function getPageDetails(data) {
    return {
        type: GET_PAGE_DETAILS,
        url: `page/${data._id}`,
        method: "GET",
        data
    }
}
export function getMedia(data) {
    return {
        type: GET_MEDIA,
        url: `media`,
        method: "GET",
        data
    }
}

export function setUser(data) {
    return {
        type: SET_USER,
        url: `auth/signup`,
        method: "POST",
        data,
    }
}
