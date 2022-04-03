import {
  HOTELS_ARE_LOADING,
  HOTELS_LOADING_COMPLETE,
  HOTELS_LOADING_ERROR,
  SET_HOTELS,
} from '../actions/types';

const initialState = {
  loading: false,
  hotels: null,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case HOTELS_ARE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case HOTELS_LOADING_COMPLETE:
      return {
        ...state,
        loading: false,
        hotels: payload,
      };
    case HOTELS_LOADING_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
      };
    case SET_HOTELS:
      return {
        ...state,
        hotels: payload.hotels,
      };
    default:
      return state;
  }
}
