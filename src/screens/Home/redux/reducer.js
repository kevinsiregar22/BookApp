const initialState = {
  listRecommended: [],
  listPopular: [],
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECOMMENDED':
      return {
        ...state,
        listRecommended: action.payload,
      };

    case 'SET_POPULAR':
      return {
        ...state,
        listPopular: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
