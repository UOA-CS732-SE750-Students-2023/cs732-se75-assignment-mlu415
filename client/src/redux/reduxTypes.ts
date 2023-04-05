import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "./reducers"; 

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
