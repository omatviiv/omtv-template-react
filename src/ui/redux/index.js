import {combineReducers} from 'redux';

// STORE STRUCTURE:
// {
//   menu: {
//     visible: true,
//   },
// }

export const menu = (state = {visible: false}, action) => {
  switch (action.type) {
    case 'SHOW_MENU':
      return {visible: true};
    case 'HIDE_MENU':
      return {visible: false};
    case 'TOGGLE_MENU_VISIBILITY':
      return {visible: !state.visible};
    default:
      return state;
  }
};

const reducer = combineReducers({menu});
export default reducer;
