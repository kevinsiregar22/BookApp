export const SetLoginEmail = data => {
  return {
    type: 'SET_LOGIN_EMAIL',
    payload: data,
  };
};

export const SetLoginPassword = data => {
  return {
    type: 'SET_LOGIN_PASSWORD',
    payload: data,
  };
};

export const SetToken = data => {
  return {
    type: 'SET_TOKEN',
    payload: data,
  };
};

export const setName = data => {
  return {
    type: 'SET_NAME',
    payload: data,
  };
};
