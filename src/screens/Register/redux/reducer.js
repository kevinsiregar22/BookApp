const initialState = {
  fullname: '',
  email: '',
  password: '',
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA_REGISTER':
      return {
        ...state,
        fullname: action.fullname,
        username: action.username,
        password: action.password,
      };

    default:
      return {
        ...state,
      };
  }
};
