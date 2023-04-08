import * as actionType from '../const/actionTypes';

interface AuthState {
  authData: any;
}

interface AuthAction {
  type: string;
  data: any;
}

const initialState: AuthState = {
  authData: null,
};

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('user_info', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
