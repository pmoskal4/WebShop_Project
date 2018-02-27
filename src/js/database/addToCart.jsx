import ActionTypes from '../constants/actionTypes.jsx';

export function addToCart() {
  return dispatch => {
    dispatch(addItemToCart());
    return this;
  }
}

function addItemToCart() {
  return {
    type: ActionTypes.AddToCart
  };
}