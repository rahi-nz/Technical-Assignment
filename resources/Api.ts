import { baseURL } from "../store/request";

export const getLaunchpad = (id: string) => `${baseURL}/launchpads/${id}`;
export const getLaunches = (id: string) => `${baseURL}/launches/${id}`;
