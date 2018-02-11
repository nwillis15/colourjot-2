import { NOTE_NEW, NOTE_UPDATE, NOTE_CREATE, NOTE_SAVE_SUCCESS } from './../actions/types';

const INITIAL_STATE = {
  title: '',
  body: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case NOTE_CREATE:
      return INITIAL_STATE;
    case NOTE_SAVE_SUCCESS:
      return INITIAL_STATE;
    case NOTE_NEW:
      return INITIAL_STATE;
    default:
      return state;
  }
};
