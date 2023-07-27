import { PayloadAction } from "@reduxjs/toolkit";
import DataActionTypes from "./action-types";

const initialState = {
  data: null,
};

const dataReducer = (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    case DataActionTypes.GET:
      return { ...state, currentHeroesList: [] };

    default:
      return state;
  }
};

export default dataReducer;
