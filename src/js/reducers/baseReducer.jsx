import ActionTypes from '../constants/actionTypes.jsx';

//creating base reducer
export function baseReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.GetDataRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.GetDataRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting data.',
      });
    }
    case ActionTypes.GetDataFulfilled: {
      //console.log(action);
      return Object.assign({}, state, {
        itemsData: action.itemsData
      });
    }
    default:
      return state;
  }
}