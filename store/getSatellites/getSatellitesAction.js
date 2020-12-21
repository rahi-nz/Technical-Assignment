import {
  GET_SATELLITE_FAILURE,
  GET_SATELLITE_REQUEST,
  GET_SATELLITE_SUCCESS,
} from "../constants";
import { request } from "../request";
import { getSatellitesServices } from "./getSatellitesService";

export const getSatellitesAction = () => async (dispatch) => {
  dispatch({ type: GET_SATELLITE_REQUEST });

  const response = await request.get(getSatellitesServices);

  if (response.ok) {
    dispatch({ type: GET_SATELLITE_SUCCESS, payload: response.data });
    return response.data;
  }

  dispatch({ type: GET_SATELLITE_FAILURE });
  return response;
};
