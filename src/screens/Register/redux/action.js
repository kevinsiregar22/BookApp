export const setDataRegister = data => {
  return {
    type: 'SET_DATA_REGISTER',
    fullname: data.fullname,
    username: data.username,
    password: data.password,
  };
};
