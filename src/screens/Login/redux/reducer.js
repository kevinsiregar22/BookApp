const initialState = {
  email: '',
  password: '',
  token: '',
  name: '',
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGIN_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    case 'SET_LOGIN_PASSWORD':
      return {
        ...state,
        password: action.payload,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
