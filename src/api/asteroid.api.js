import axios from '../http'
// import { searchParam } from "../models/common.model";

const ASTEROIDS = 'https://asteroids.dev.mediasia.cn/asteroids'

/**
 * get asteroid list
 * @returns
 */
export function getAsteroidsListApi() {
  return axios({
    url: ASTEROIDS,
    method: 'get'
  })
}

// /**
//  * get activity detail by activityId
//  * @param activityId
//  * @returns
//  */
// export function getActivityInfoApi(activityId: number) {
//   return axios({
//     url: `${process.env.VUE_APP_API_PREFIX}${activityApiUrl.URL_GET_ACTIVITY_DETAIL}`,
//     method: "get",
//     params: { activityId },
//   });
// }

// /**
//  * add new activity
//  * @param activity
//  * @returns
//  */
// export function addNewActivityApi(activity: Partial<ActivityModel>) {
//   return axios({
//     url: `${process.env.VUE_APP_API_PREFIX}${activityApiUrl.URL_ADD_ACTIVITY}`,
//     method: "post",
//     data: activity,
//   });
// }

// /**
//  * update activity
//  * @param activity
//  * @returns
//  */
// export function updateActivityApi(activity: Partial<ActivityModel>) {
//   return axios({
//     url: `${process.env.VUE_APP_API_PREFIX}${activityApiUrl.URL_UPDATE_ACTIVITY}`,
//     method: "put",
//     data: activity,
//   });
// }

// /**
//  * cancel activity
//  * @param activityId
//  * @returns
//  */
// export function cancelActivityApi(activityId: number) {
//   return axios({
//     url: `${process.env.VUE_APP_API_PREFIX}${activityApiUrl.URL_CANCEL_ACTIVITY}`,
//     method: "put",
//     params: { activityId },
//   });
// }

// /**
//  * delete activity
//  * @param activityId
//  * @returns
//  */
// export function deleteActivityApi(activityId: number) {
//   return axios({
//     url: `${process.env.VUE_APP_API_PREFIX}${activityApiUrl.URL_DELETE_ACTIVITY}`,
//     method: "put",
//     params: { activityId },
//   });
// }

// /**
//  * add single session api
//  * @param session
//  * @returns
//  */
// export function addSingleSessionApi(session: Partial<SessionModel>) {
//   return axios({
//     url: `${process.env.VUE_APP_API_PREFIX}${activityApiUrl.URL_ADD_SESSION}`,
//     method: "post",
//     data: session,
//   });
// }

// /**
//  * update single session api
//  * @param session
//  * @returns
//  */
// export function updateSingleSessionApi(session: Partial<SessionModel>) {
//   return axios({
//     url: `${process.env.VUE_APP_API_PREFIX}${activityApiUrl.URL_UPDATE_SESSION}`,
//     method: "put",
//     data: session,
//   });
// }

// /**
//  * recomend activity
//  * @param activityId
//  * @returns
//  */
// export function setRecomendedActivityApi(activityId: number) {
//   return axios({
//     url: `${process.env.VUE_APP_API_PREFIX}${activityApiUrl.URL_RECOMMAND_ACTIVITY}`,
//     method: "put",
//     params: { activityId },
//   });
// }

// /**
//  * unrecomend activity
//  * @param activityId
//  * @returns
//  */
// export function unrecomendedActivityApi(activityId: number) {
//   return axios({
//     url: `${process.env.VUE_APP_API_PREFIX}${activityApiUrl.URL_UNRECOMMAND_ACTIVITY}`,
//     method: "put",
//     params: { activityId },
//   });
// }

// /**
//  * close session
//  * @param sessionId
//  * @returns
//  */
// export function closeSessionApi(sessionId: number) {
//   return axios({
//     url: `${process.env.VUE_APP_API_PREFIX}${activityApiUrl.URL_SESSION_CLOSE}`,
//     method: "put",
//     params: { sessionId },
//   });
// }

// /**
//  * open session
//  * @param sessionId
//  * @returns
//  */
// export function openSessionApi(sessionId: number) {
//   return axios({
//     url: `${process.env.VUE_APP_API_PREFIX}${activityApiUrl.URL_SESSION_OPEN}`,
//     method: "put",
//     params: { sessionId },
//   });
// }

// /**
//  * activity display set
//  * @param data
//  * @returns
//  */
// export function activityDisplaySetApi(data: number[]) {
//   return axios({
//     url: `${process.env.VUE_APP_API_PREFIX}${activityApiUrl.URL_ACTIVITY_DISPLAY_SET}`,
//     method: "put",
//     data: data,
//   });
// }

// /**
//  * update session plany
//  * @param session
//  * @returns
//  */
// export function updateSessionPlanApi(session: Partial<SessionModel>) {
//   return axios({
//     url: `${process.env.VUE_APP_API_PREFIX}${activityApiUrl.URL_UPDATE_SESSION_PLAN}`,
//     method: "put",
//     data: session,
//   });
// }
// export function setStrongRecomendedActivityApi(activity: {
//   flagEndDate: string;
//   activityId: number;
// }) {
//   return axios({
//     url: `${process.env.VUE_APP_API_PREFIX}${activityApiUrl.URL_RECOMMAND_ACTIVITY_STRONG}`,
//     method: "put",
//     data: activity,
//   });
// }
// export function unrecomendedActivityStrongApi(activityId: number) {
//   return axios({
//     url: `${process.env.VUE_APP_API_PREFIX}${activityApiUrl.URL_UNRECOMMAND_ACTIVITY_STRONG}`,
//     method: "put",
//     params: { activityId },
//   });
// }
