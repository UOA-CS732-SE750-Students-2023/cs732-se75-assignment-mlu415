import { createStore, applyMiddleware, compose } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import rootReducer from "./reducers";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

const composeEnhancers =
  (typeof window !== "undefined" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
