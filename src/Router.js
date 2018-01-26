import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import NoteList from './components/NoteList';
import NoteCreate from './components/NoteCreate';
import NoteUpdate from './components/NoteUpdate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="ColourJot 2"
          />
        </Scene>

        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.noteCreate()}
            key="noteList"
            component={NoteList}
            title="Notes"
            initial
          />

          <Scene key="noteCreate" component={NoteCreate} title="Create Note" />
          <Scene key="noteUpdate" component={NoteUpdate} title="Update Note" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;