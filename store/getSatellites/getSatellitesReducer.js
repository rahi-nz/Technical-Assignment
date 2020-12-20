import {
  GET_SATELLITE_FAILURE,
  GET_SATELLITE_REQUEST,
  GET_SATELLITE_SUCCESS,
} from "../constants";

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Delete Application Request Cases
    case GET_SATELLITE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SATELLITE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_SATELLITE_FAILURE:
      return {
        ...state,
        error: false,
      };

    default:
      return state;
  }
};
