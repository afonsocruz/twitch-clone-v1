import { useState } from 'react';

import firebase from 'firebase';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';

import LoginModalStyle from './style';

export default function LoginModal() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit() {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <LoginModalStyle>
            <h1>Login</h1>
            <FormGroup className="login-modal">
                <TextField id="standard-basic-one" label="Username" onChange={e => setEmail(e.target.value)}/>
                <TextField id="standard-basic-two" label="Password" onChange={e => setPassword(e.target.value)}/>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Sign in
                </Button>
            </FormGroup>
        </LoginModalStyle>
    )

}