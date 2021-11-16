/* eslint-disable import/no-anonymous-default-export */
import {
  CHANGE_STARTTIME,
  CHANGE_ENDTIME,
  CHANGE_DROPDOWNVALUE,
} from "../actions/types";

const initialState = {
  starttime: "NOW - 3days",
  endtime: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_STARTTIME:
      return {
        ...state,
        starttime: action.starttime,
        endtime: "",
      };
    case CHANGE_ENDTIME:
      return {
        ...state,
        endtime: action.endtime,
      };
    case CHANGE_DROPDOWNVALUE:
      return {
        ...state,
        dropdownValue: action.dropdownValue,
      };
    default:
      return state;
  }
};
