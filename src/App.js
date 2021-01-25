import { useEffect } from 'react';

import Routes from './routes';
import GlobalStyle from './styles';

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

function App() {

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
      } else {
        console.log('user logged out');
      }
    });
  }, [])
  
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
