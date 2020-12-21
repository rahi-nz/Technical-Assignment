import { combineReducers } from "redux";
import satellites from "./getSatellites/getSatellitesReducer";

export default combineReducers({
  satellites,
});
