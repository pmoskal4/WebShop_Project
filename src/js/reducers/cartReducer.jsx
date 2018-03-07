export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,
        Object.assign({}, action.products)
      ];
    default:
      return state;
  }
}