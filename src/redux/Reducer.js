import { createAction, handleActions } from 'redux-actions';
import { ScreenSize } from '../utils/helpers';

const defaultState = {
  size: undefined,
  width: undefined,
  height: undefined
};

const REACT_REDUX_DIMENSIONS_SAVE = 'REACT_REDUX_DIMENSIONS_SAVE';
export const saveDimensionData = createAction(REACT_REDUX_DIMENSIONS_SAVE);


export default handleActions({
  REACT_REDUX_DIMENSIONS_SAVE: (state, { payload } = {}) => {
    if (payload) {
      const {
        height,
        width
      } = payload

      return {
        ...state,
        ...payload
      };
    }
    return state;
  }
}, defaultState);
