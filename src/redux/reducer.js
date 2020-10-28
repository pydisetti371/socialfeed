const defaultState = {
  getFacebookDetails: [],
  getTwitterDetails: [],
  getLinkedinDetails: [],
};

const reducer = (state = defaultState, action) => {
  // console.log(action, "action");
  switch (action.type) {
    case "GET_FACEBOOK":
      return {
        ...state,
        getFacebookDetails: action.payload,
      };
      break;
    case "GET_TWITTER":
      return {
        ...state,
        getTwitterDetails: action.payload,
      };
      break;
    case "GET_LINKEDIN":
      return {
        ...state,
        getLinkedinDetails: action.payload,
      };
      break;
  }
  return state;
};
export default reducer;
