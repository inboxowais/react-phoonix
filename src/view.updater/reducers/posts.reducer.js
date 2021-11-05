import Immutable from 'immutable';
import {
    GET_BLOGS, GET_BLOGS_SUCCESS, GET_BLOGS_ERROR,
    GET_EVENTS, GET_EVENTS_SUCCESS, GET_EVENTS_ERROR,
    GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_ERROR,
    GET_OFFICES, GET_OFFICES_SUCCESS, GET_OFFICES_ERROR,
    GET_MEMBERS, GET_MEMBERS_SUCCESS, GET_MEMBERS_ERROR,
    GET_SURVEYS, GET_SURVEYS_SUCCESS, GET_SURVEYS_ERROR,
    GET_POST_DETAILS, GET_POST_DETAILS_SUCCESS, GET_POST_DETAILS_ERROR,
    GET_REPORTS, GET_REPORTS_SUCCESS, GET_REPORTS_ERROR,
    GET_SURVEY_DETAILS, GET_SURVEY_DETAILS_SUCCESS, GET_SURVEY_DETAILS_ERROR,
    GET_PAGE_DETAILS, GET_PAGE_DETAILS_SUCCESS, GET_PAGE_DETAILS_ERROR,
    GET_MEDIA, GET_MEDIA_SUCCESS, GET_MEDIA_ERROR,
    SET_USER, SET_USER_SUCCESS, SET_USER_ERROR,

} from './../actions/posts.action'

const initialState = Immutable.fromJS({
    blogsResponse: false,
    blogsLoading: false,
    blogsError: false,
    eventsResponse: false,
    eventsLoading: false,
    eventsError: false,
    newsResponse: false,
    newsLoading: false,
    newsError: false,
    officesResponse: false,
    officesLoading: false,
    officesError: false,
    membersResponse: false,
    membersLoading: false,
    membersError: false,
    surveysResponse: false,
    surveysLoading: false,
    surveysError: false,
    postDetailsResponse: false,
    postDetailsLoading: false,
    postDetailsError: false,
    reportsResponse: false,
    reportsLoading: false,
    reportsError: false,
    surveyDetailsResponse: false,
    surveyDetailsLoading: false,
    surveyDetailsError: false,
    pageDetailsResponse: false,
    pageDetailsLoading: false,
    pageDetailsError: false,
    mediaResponse: false,
    mediaLoading: false,
    mediaError: false,
    userResponse: false,
    userLoading: false,
    userError: false,

});

function postsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BLOGS:
            return state
                .set('blogsLoading', true)
                .set('blogsError', false)
        // .set("blogsIsLoading", true)
        case GET_BLOGS_SUCCESS:
            return state
                .set('blogsLoading', false)
                .set('blogsError', false)
                .set("blogsResponse", action.response)
        case GET_BLOGS_ERROR:
            return state
                .set('blogsLoading', false)
                .set('blogsError', true)
        case GET_EVENTS:
            return state
                .set('eventsLoading', true)
                .set('eventsError', false)
        // .set("eventsIsLoading", true)
        case GET_EVENTS_SUCCESS:
            return state
                .set('eventsLoading', false)
                .set('eventsError', false)
                .set("eventsResponse", action.response)
        case GET_EVENTS_ERROR:
            return state
                .set('eventsLoading', false)
                .set('eventsError', true)
        case GET_NEWS:
            return state
                .set('newsLoading', true)
                .set('newsError', false)
        // .set("newsIsLoading", true)
        case GET_NEWS_SUCCESS:
            return state
                .set('newsLoading', false)
                .set('newsError', false)
                .set("newsResponse", action.response)
        case GET_NEWS_ERROR:
            return state
                .set('newsLoading', false)
                .set('newsError', true)
        case GET_OFFICES:
            return state
                .set('officesLoading', true)
                .set('officesError', false)
        // .set("officesIsLoading", true)
        case GET_OFFICES_SUCCESS:
            return state
                .set('officesLoading', false)
                .set('officesError', false)
                .set("officesResponse", action.response)
        case GET_OFFICES_ERROR:
            return state
                .set('officesLoading', false)
                .set('officesError', true)
        case GET_MEMBERS:
            return state
                .set('membersLoading', true)
                .set('membersError', false)
        // .set("membersIsLoading", true)
        case GET_MEMBERS_SUCCESS:
            return state
                .set('membersLoading', false)
                .set('membersError', false)
                .set("membersResponse", action.response)
        case GET_MEMBERS_ERROR:
            return state
                .set('membersLoading', false)
                .set('membersError', true)
        case GET_SURVEYS:
            return state
                .set('surveysLoading', true)
                .set('surveysError', false)
        // .set("surveysIsLoading", true)
        case GET_SURVEYS_SUCCESS:
            return state
                .set('surveysLoading', false)
                .set('surveysError', false)
                .set("surveysResponse", action.response)
        case GET_SURVEYS_ERROR:
            return state
                .set('surveysLoading', false)
                .set('surveysError', true)
        case GET_POST_DETAILS:
            return state
                .set('postDetailsLoading', true)
                .set('postDetailsError', false)
        // .set("postDetailsIsLoading", true)
        case GET_POST_DETAILS_SUCCESS:
            return state
                .set('postDetailsLoading', false)
                .set('postDetailsError', false)
                .set("postDetailsResponse", action.response)
        case GET_POST_DETAILS_ERROR:
            return state
                .set('postDetailsLoading', false)
                .set('postDetailsError', true)
        case GET_REPORTS:
            return state
                .set('reportsLoading', true)
                .set('reportsError', false)
        // .set("reportsIsLoading", true)
        case GET_REPORTS_SUCCESS:
            return state
                .set('reportsLoading', false)
                .set('reportsError', false)
                .set("reportsResponse", action.response)
        case GET_REPORTS_ERROR:
            return state
                .set('reportsLoading', false)
                .set('reportsError', true)
        case GET_SURVEY_DETAILS:
            return state
                .set('surveyDetailsLoading', true)
                .set('surveyDetailsError', false)
        // .set("surveyDetailsIsLoading", true)
        case GET_SURVEY_DETAILS_SUCCESS:
            return state
                .set('surveyDetailsLoading', false)
                .set('surveyDetailsError', false)
                .set("surveyDetailsResponse", action.response)
        case GET_SURVEY_DETAILS_ERROR:
            return state
                .set('surveyDetailsLoading', false)
                .set('surveyDetailsError', true)
        case GET_PAGE_DETAILS:
            return state
                .set('pageDetailsLoading', true)
                .set('pageDetailsError', false)
        // .set("pageDetailsIsLoading", true)
        case GET_PAGE_DETAILS_SUCCESS:
            return state
                .set('pageDetailsLoading', false)
                .set('pageDetailsError', false)
                .set("pageDetailsResponse", action.response)
        case GET_PAGE_DETAILS_ERROR:
            return state
                .set('pageDetailsLoading', false)
                .set('pageDetailsError', true)
        case GET_MEDIA:
            return state
                .set('mediaLoading', true)
                .set('mediaError', false)
        // .set("mediaIsLoading", true)
        case GET_MEDIA_SUCCESS:
            return state
                .set('mediaLoading', false)
                .set('mediaError', false)
                .set("mediaResponse", action.response)
        case GET_MEDIA_ERROR:
            return state
                .set('mediaLoading', false)
                .set('mediaError', true)
        case SET_USER:
            return state
                .set('userLoading', true)
                .set('userError', false)
        // .set("userIsLoading", true)
        case SET_USER_SUCCESS:
            return state
                .set('userLoading', false)
                .set('userError', false)
                .set("userResponse", action.response)
        case SET_USER_ERROR:
            return state
                .set('userLoading', false)
                .set('userError', true)
        default:
            return state;
    }
}

export default postsReducer