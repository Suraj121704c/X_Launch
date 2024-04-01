import {LAUNCH_ERROR, LAUNCH_REQUEST, LAUNCH_SUCCESS} from '../types';

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const launchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LAUNCH_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LAUNCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case LAUNCH_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
