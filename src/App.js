import { useEffect } from 'react';
import Routes from './routes';
import GlobalStyle from './styles';
import firebase from 'firebase';
import { useUser } from './context/user';

function App() {
  const { user, setUser } = useUser();
  useEffect(() => {
    firebase.database().ref('/users/').on('value', (snapshot) =>{
      console.log(snapshot.val());
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
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
