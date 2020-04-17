const InitialState = {
  isAuth: false,
  token: null,
};

export const auth = (state = InitialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { isAuth: true, token: action.token };
    case 'LOGOUT':
      return {
        isAuth: false,
        token: null,
      };
    default:
      return state;
  }
};
