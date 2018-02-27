import ActionTypes from '../constants/actionTypes.jsx';

export function cartReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.AddToCart: {
      return Object.assign({}, state, {
        cart: { ...state, cart: this }
      })
    }
    case ActionTypes.RemoveFromCart: {
      return Object.assign({}, state, {
        cart: this.cart
      });
    }
    default:
      return state;
  }
}