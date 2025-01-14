import { combineReducers } from "redux";

const initialState = {
  firstName: "",
  lastName: "",
  avatar: "",
  email: "",
  school: "",
  linkedin: "",
  gender: "",
  interests: [],
  bio: "",
  avatar: "",
  availability: [],
};

const registrationReducer = (state = initialState, action) => {
  if (action.type === "ADD_FIRST_PAGE_INFO") {
    return { ...state, ...action.payload };
  }
  if (action.type === "ADD_SECOND_PAGE_INFO") {
    return { ...state, ...action.payload };
  }
  if (action.type === "ADD_THIRD_PAGE_INFO") {
    return { ...state, ...action.payload };
  }
  if (action.type === "ADD_FOURTH_PAGE_INFO") {
    return { ...state, ...action.payload };
  } else {
    return state;
  }
};

// const interestReducer = (state = [], action) => {
//   if (action.type === "SET_INTERESTS") {
//     return action.payload;
//   } else {
//     return state;
//   }
// };

// const schoolsReducer = (state = [], action) => {
//   if (action.type === "SET_SCHOOLS") {
//     return action.payload;
//   } else {
//     return state;
//   }
// };

// const genderReducer = (state = [], action) => {
//   if (action.type === "SET_GENDERS") {
//     return action.payload;
//   } else {
//     return state;
//   }
// };

export default combineReducers({
  registrationReducer,
  // schoolsReducer,
  // interestReducer,
  // genderReducer,
});
