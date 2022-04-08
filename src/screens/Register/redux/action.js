export const SetUsername = data => {
  return {
    type: 'SET_NAME',
    payload: data,
  };
};

export const SetPassword = data => {
  return {
    type: 'SET_PASSWORD',
    payload: data,
  };
};

export const SetEmail = data => {
  return {
    type: 'SET_EMAIL',
    payload: data,
  };
};
