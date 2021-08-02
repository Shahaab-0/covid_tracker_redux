import {GET_STATE, GET_API} from '../actions/ActionTypes';

const INITIAL_STATE = {
  states: '',
  api: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_STATE:
      console.log('>>>>>>>', action.payload);
      return {...state, states: action.payload};
    case GET_API:
      //   console.log('getState api', action.payload);
      return {...state, api: action.payload};

    default:
      return state;
  }
};
