import {GET_API, GET_STATE} from './ActionTypes';
import axios from 'axios';

export const getState = state => {
  console.log(state);
  return dispatch => {
    dispatch({
      type: GET_STATE,
      payload: state,
    });
  };
};

export const getApi = () => {
  return dispatch => {
    axios
      .get('https://api.covid19india.org/data.json')
      .then(response => {
        dispatch({
          type: GET_API,
          payload: response.data.statewise,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
