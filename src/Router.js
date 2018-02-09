import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import NoteList from './components/NoteList';
import NoteCreate from './components/NoteCreate';
import NoteUpdate from './components/NoteUpdate';
import NavBar from './components/navigation/NavBar';

const RouterComponent = () => {
  return (
    <Router >
      <Scene key="root" navBar={NavBar} hideNavBar="true"  duration={0}>
        <Scene key="auth" >
          <Scene
            key="login"
            component={LoginForm}
          />
        </Scene>

        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.noteCreate()}
            key="noteList"
            component={NoteList}
            initial
          />

          <Scene key="noteCreate" component={NoteCreate} />
          <Scene key="noteUpdate" component={NoteUpdate} />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;