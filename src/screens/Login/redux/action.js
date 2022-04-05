export const setDataUsername = data => {
  return {
    type: 'SET_EMAIL',
    payload: data,
  };
};

export const setDataPassword = data => {
  return {
    type: 'SET_PASSWORD',
    payload: data,
  };
};
