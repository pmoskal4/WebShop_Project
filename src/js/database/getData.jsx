import ActionTypes from '../constants/actionTypes.jsx';
import database from '../firebase/firebase_config.js';

export function getData() {
  return dispatch => {
    dispatch(getDataRequestedAction());
    return database.once('value', snap => {
      const itemsData = snap.val();
      dispatch(getDataFulfilledAction(itemsData))
    })
      .catch((error) => {
        console.log(error);
        dispatch(getDataRejectedAction());
      });
  }
}

function getDataRequestedAction() {
  return {
    type: ActionTypes.GetDataRequested
  };
}

function getDataRejectedAction() {
  return {
    type: ActionTypes.GetDataRejected
  }
}

function getDataFulfilledAction(itemsData) {
  return {
    type: ActionTypes.GetDataFulfilled,
    itemsData
  };
}