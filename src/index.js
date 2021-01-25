import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import UserProvider from './context/user';
import SnackbarProvider from './context/snackbar';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD6FRzusTLMvjQRvgrvti-3H29uMwj6azg",
  authDomain: "twitch-clone-6e63f.firebaseapp.com",
  databaseURL: "https://twitch-clone-6e63f-default-rtdb.firebaseio.com",
  projectId: "twitch-clone-6e63f",
  storageBucket: "twitch-clone-6e63f.appspot.com",
  messagingSenderId: "506517329352",
  appId: "1:506517329352:web:ffbe8819d001e50a6e1cfd"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
