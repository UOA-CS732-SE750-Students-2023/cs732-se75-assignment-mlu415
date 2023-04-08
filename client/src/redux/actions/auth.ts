import { AUTH } from "../const/actionTypes";
import * as api from "../../api/index";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import { AnyAction, Dispatch } from "redux";
import { NavigateFunction } from "react-router-dom";
import { AppDispatch } from "../store";

interface SignInData {
  email: string;
  password: string;
}

export const signin = (data: SignInData, navigate: NavigateFunction) => async (
  dispatch: AppDispatch
) => {
  try {
    const { data: responseData } = await api.signIn(data);
    dispatch({ type: AUTH, data: responseData });
    navigate("/home");
  } catch (err) {
    console.log(err);
  }
};

interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
}

export const signup = (
  formData: SignUpData,
  navigate: NavigateFunction
): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => async (
  dispatch
) => {
  try {
    const { data: responseData } = await api.signUp(formData);
    dispatch({ type: AUTH, data: responseData });
    navigate("/home");
  } catch (err) {
    console.log(err);
  }
};

export const loadUser = () => (dispatch: Dispatch) => {
  const localUser = JSON.parse(localStorage.getItem("user_info") || "{}");

  if (localUser) {
    dispatch({ type: AUTH, data: localUser });
  }
};

export const signinGoogle = (
  accessToken: string,
  navigate: NavigateFunction
) => async (dispatch: Dispatch) => {
  try {
    const { data: responseData } = await api.signInGoogle(accessToken);
    dispatch({ type: AUTH, data: responseData });
    navigate("/home");
  } catch (err) {
    console.log(err);
  }
};

export const signupGoogle = (
  accessToken: string,
  navigate: NavigateFunction
): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => async (
  dispatch
) => {
  try {
    const { data: responseData } = await api.signUpGoogle(accessToken);
    dispatch({ type: AUTH, data: responseData });
    navigate("/home");
  } catch (err) {
    console.log(err);
  }
};