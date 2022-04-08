const initialState = {
  email: '',
  password: '',
  name: '',
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload,
      };
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default RegisterReducer;
