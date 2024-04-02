import {launch_baseUrl} from '../../services/Api';
import {LAUNCH_ERROR, LAUNCH_REQUEST, LAUNCH_SUCCESS} from '../types';

export const launchAction = () => {
  return async (dispatch: any) => {
    dispatch({
      type: LAUNCH_REQUEST,
    });
    try {
      let url = launch_baseUrl;
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

export const searchLaunch = (search: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: LAUNCH_REQUEST,
    });
    try {
      let url = launch_baseUrl + `?mission_name=${search}`;
      fetch(url)
        .then(res => res.json())
        .then(res => {
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

export const statusAction = (status: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: LAUNCH_REQUEST,
    });
    try {
      let url =
        launch_baseUrl + `?launch_success=${status}`;

    console.log(url)

      fetch(url)
        .then(res => res.json())
        .then(res => {
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


export const yearAction = (year: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: LAUNCH_REQUEST,
    });
    try {
      let url =
        launch_baseUrl + `?launch_year=${year}`;

    console.log(url)

      fetch(url)
        .then(res => res.json())
        .then(res => {
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