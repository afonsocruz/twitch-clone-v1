import { useEffect } from 'react';
import Routes from './routes';
import GlobalStyle from './styles';
import firebase from 'firebase';
import { useUser } from './context/user';

function App() {
  const { user, setUser } = useUser();
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
