import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import NoteList from './components/NoteList';
import NoteCreate from './components/NoteCreate';
import NoteUpdate from './components/NoteUpdate';
import NavBar from './components/navigation/NavBar';
import NavBarAdd from './components/navigation/NavBarAdd';
import NavBarBack from './components/navigation/NavBarBack';

const RouterComponent = () => {
  return (
    <Router >
      <Scene key="root" hideNavBar="true"  duration={0}>
        <Scene key="auth" navBar={NavBar}>
          <Scene
            key="login"
            component={LoginForm}
          />
        </Scene>

        <Scene key="main">
          <Scene
            navBar={NavBarAdd}
            key="noteList"
            component={NoteList}
            initial
          />

          <Scene
            navBar={NavBarBack}
            key="noteCreate"
            component={NoteCreate}
          />

          <Scene
            navBar={NavBarBack}
            key="noteUpdate"
            component={NoteUpdate}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;