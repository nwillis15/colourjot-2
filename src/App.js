import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDzU_QwSO0Oth1G0lNJ6-AKWV_PPNha2v8',
      authDomain: 'colourjot2.firebaseapp.com',
      databaseURL: 'https://colourjot2.firebaseio.com',
      projectId: 'colourjot2',
      storageBucket: '',
      messagingSenderId: '204251946509'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router/>
      </Provider>
    );
  }
}

export default App;