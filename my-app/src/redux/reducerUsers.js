import { usersApi } from "../../src/API/api";
import {updateObjectInArray} from "../components/utils/objectHelper"
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TOOGLE_IS_FOLLOWING_PROCESS = "TOOGLE_IS_FOLLOWING_PROCESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};
const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, 
        users: updateObjectInArray(state.users, action.userId, "id",  {followed: true}  )
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id",  {followed: false}  )
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOOGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOOGLE_IS_FOLLOWING_PROCESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};

export const followSucces = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollowSucces = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toogleIsFetching = (isFetching) => ({
  type: TOOGLE_IS_FETCHING,
  isFetching,
});
export const toogleFollowingProgress = (isFetching, userId) => ({
  type: TOOGLE_IS_FOLLOWING_PROCESS,
  isFetching,
  userId,
});

export const requestUsers  = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toogleIsFetching(true));
    let data = await   usersApi.getUsers(page, pageSize)
      dispatch(toogleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    };
  };

  const followUnfollowFlow=  async (dispatch, userId, apiMethod, actionCreator)=>{
    dispatch(toogleFollowingProgress(true, userId));
    let response = await  apiMethod(userId)
      if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
      }
      dispatch(toogleFollowingProgress(false, userId));
  }
export const follow = (userId) => {
  return async (dispatch) => {
    let apiMethod=usersApi.follow.bind(userId);
    let actionCreator=followSucces;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    };
  };


export const unfollow = (userId) => {
  return async (dispatch) => {
    let apiMethod=usersApi.unfollow.bind(userId)
    let actionCreator=unfollowSucces;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    };
  };
export default reducerUsers;
