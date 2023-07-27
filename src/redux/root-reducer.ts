import { combineReducers } from "@reduxjs/toolkit";

import dataReducer from "./data/reducer";

const rootReducer = combineReducers({ dataReducer });

export default rootReducer;
