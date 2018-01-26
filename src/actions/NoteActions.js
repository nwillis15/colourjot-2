import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { NOTE_UPDATE, NOTE_CREATE, NOTES_FETCH_SUCCESS, NOTE_SAVE_SUCCESS } from './types';

export const noteUpdate = ({ prop, value }) => {
  return {
    type: NOTE_UPDATE,
    payload: { prop, value }
  };
};

export const noteCreate = ({ title, body }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes`)
      .push({ title, body })
      .then(() => {
        dispatch({ type: NOTE_CREATE });
        Actions.main({ type: 'reset' });
      });
  };
};

export const notesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes`)
      .on('value', snapshot => {
        dispatch({ type: NOTES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const noteSave = ({ title, body, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes/${uid}`)
      .set({ title, body })
      .then(() => {
        dispatch({ type: NOTE_SAVE_SUCCESS });
        Actions.main({ type: 'reset' });
      });
  };
};

export const noteDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/notes/${uid}`)
      .remove()
      .then(() => {
        Actions.main({ type: 'reset' });
      });
  };
};
