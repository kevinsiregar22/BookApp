const initialState = {
  dataEmail: '',
  dataPassword: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return {
        ...state,
        dataEmail: action.payload,
      };

    case 'SET_PASSWORD':
      return {
        ...state,
        dataPassword: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
