import {launch_baseUrl} from '../../services/Api';
import {LAUNCH_ERROR, LAUNCH_REQUEST, LAUNCH_SUCCESS} from '../types';

export const launchAction = (
  missionName?: string,
  launch_success?: boolean,
  launch_year?: string,
) => {
  return async (dispatch: any) => {
    dispatch({
      type: LAUNCH_REQUEST,
    });
    try {
      let url = launch_baseUrl;
      let isFirstParam = true;
      if (missionName) {
        url += `?mission_name=${missionName}`;
        isFirstParam = false;
      }
      if (launch_success !== undefined) {
        url += `${isFirstParam ? '?' : '&'}launch_success=${launch_success}`;
        isFirstParam = false;
      }
      if (launch_year) {
        url += `${isFirstParam ? '?' : '&'}launch_year=${launch_year}`;
      }
      fetch(url)
        .then(res => res.json())
        .then(res => {
          // console.log(res);
          dispatch({
            type: LAUNCH_SUCCESS,
            payload: res,
          });
        })
        .catch(err => {
          console.log(err);
          dispatch({
            type: LAUNCH_ERROR,
          });
        });
    } catch (error) {
      dispatch({
        type: LAUNCH_ERROR,
      });
    }
  };
};
