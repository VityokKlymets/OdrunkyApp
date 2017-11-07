import { PROMISE } from "../../reducers/types";
export default store => next => action => {
  if (action.type !== PROMISE) {
    return next(action);
  }
  console.log(action);
  const [DATA_LOADING, DATA_LOADED, DATA_LOAD_FAILURE] = action.loadState;
  store.dispatch({
    type: DATA_LOADING
  });
    action
      .apiFunc(action.params)
      .then(responce => {
        store.dispatch({
          type: DATA_LOADED,
          data: responce.data
        });
      })
      .catch(error => {
        store.dispatch({
          type: DATA_LOAD_FAILURE,
          error
        });
      });
};
