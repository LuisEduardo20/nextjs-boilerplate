import DataActionTypes from "./action-types";

export const getData = (payload: unknown) => ({
  type: DataActionTypes.GET,
  payload,
});
