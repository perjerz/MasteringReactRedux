import axios from 'axios';

export const SET_FIELD = 'SET_FIELD';
export const UPDATE_TIME = 'UPDATE_TIME';
export const RESET_FORM = 'RESET_FORM';
export const GET_WEATHER = 'GET_WEATHER';
export const GET_WEATHER_PENDING = 'GET_WEATHER_PENDING';
export const GET_WEATHER_FULFILLED = 'GET_WEATHER_FULFILLED';
export const GET_WEATHER_REJECTED = 'GET_WEATHER_REJECTED';

const initialState = {
  name: '',
  email: '',
  ticketType: '',
  bFood: false,
  bAgreeTerm: false,
  countdown: ''
};

export const setField = (key, value) => ({
  type: SET_FIELD,
  key,
  value
});

export const updateTime = countdown => {
  return {
    type: UPDATE_TIME,
    countdown
  };
};

export const resetForm = () => {
  return {
    type: RESET_FORM
  };
};

export const getWeather = location => {
  return {
    type: GET_WEATHER,
    weather: axios.get(`/api/location/search/?query=${location}`)
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD: {
      const { key, value } = action;
      return { ...state, [key]: value };
    }
    case UPDATE_TIME: {
      return { ...state, countdown: action.countdown };
    }
    case RESET_FORM: {
      return { ...state, ...initialState };
    }
    case GET_WEATHER_PENDING: {
      return { ...state, weather: 'LOADING' };
    }
    case GET_WEATHER_FULFILLED: {
      return { ...state, weather: action.weather };
    }
    case GET_WEATHER_REJECTED: {
      return { ...state, weather: 'Weather error' };
    }
    default:
      return state;
  }
};
