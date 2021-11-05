import { createSelector } from 'reselect';

const selectPosts = (state) => state.get('postsReducer');


const makeSelectBlogs = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("blogsResponse")
)
const makeSelectBlogsLoading = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("blogsLoading")
)
const makeSelectBlogsError = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("blogsError")
)

const makeSelectEvents = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("eventsResponse")
)
const makeSelectEventsLoading = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("eventsLoading")
)
const makeSelectEventsError = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("eventsError")
)
const makeSelectNews = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("newsResponse")
)
const makeSelectNewsLoading = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("newsLoading")
)
const makeSelectNewsError = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("newsError")
)
const makeSelectOffices = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("officesResponse")
)
const makeSelectOfficesLoading = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("officesLoading")
)
const makeSelectOfficesError = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("officesError")
)
const makeSelectMembers = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("membersResponse")
)
const makeSelectMembersLoading = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("membersLoading")
)
const makeSelectMembersError = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("membersError")
)
const makeSelectSurveys = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("surveysResponse")
)
const makeSelectSurveysLoading = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("surveysLoading")
)
const makeSelectSurveysError = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("surveysError")
)
const makeSelectPostDetails = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("postDetailsResponse")
)
const makeSelectPostDetailsLoading = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("postDetailsLoading")
)
const makeSelectPostDetailsError = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("postDetailsError")
)
const makeSelectReports = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("reportsResponse")
)
const makeSelectReportsLoading = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("reportsLoading")
)
const makeSelectReportsError = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("reportsError")
)
const makeSelectSurveyDetails = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("surveyDetailsResponse")
)
const makeSelectSurveyDetailsLoading = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("surveyDetailsLoading")
)
const makeSelectSurveyDetailsError = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("surveyDetailsError")
)
const makeSelectPageDetails = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("pageDetailsResponse")
)
const makeSelectPageDetailsLoading = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("pageDetailsLoading")
)
const makeSelectPageDetailsError = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("pageDetailsError")
)
const makeSelectMedia = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("mediaResponse")
)
const makeSelectMediaLoading = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("mediaLoading")
)
const makeSelectMediaError = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("mediaError")
)
const makeSelectUserResponse = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("userResponse")
)
const makeSelectUserResponseLoading = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("userLoading")
)
const makeSelectUserResponseError = () => createSelector(
    selectPosts,
    (selectPosts) => selectPosts.get("userError")
)
export {
    makeSelectBlogs,
    makeSelectBlogsLoading,
    makeSelectBlogsError,
    makeSelectEvents,
    makeSelectEventsLoading,
    makeSelectEventsError,
    makeSelectNews,
    makeSelectNewsLoading,
    makeSelectNewsError,
    makeSelectOffices,
    makeSelectOfficesLoading,
    makeSelectOfficesError,
    makeSelectMembers,
    makeSelectMembersLoading,
    makeSelectMembersError,
    makeSelectSurveys,
    makeSelectSurveysLoading,
    makeSelectSurveysError,
    makeSelectPostDetails,
    makeSelectPostDetailsLoading,
    makeSelectPostDetailsError,
    makeSelectReports,
    makeSelectReportsLoading,
    makeSelectReportsError,
    makeSelectSurveyDetails,
    makeSelectSurveyDetailsLoading,
    makeSelectSurveyDetailsError,
    makeSelectPageDetails,
    makeSelectPageDetailsLoading,
    makeSelectPageDetailsError,
    makeSelectMedia,
    makeSelectMediaLoading,
    makeSelectMediaError,
    makeSelectUserResponse,
    makeSelectUserResponseLoading,
    makeSelectUserResponseError

}

