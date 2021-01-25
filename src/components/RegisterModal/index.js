import { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';

import firebase from 'firebase'

import RegisterModalStyle from './styles';

export default function RegisterModal() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function handleSubmit() {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return (
        <RegisterModalStyle>
            <h1>Create your account</h1>
            <FormGroup className="login-modal">
                <TextField id="standard-basic" label="Username" onChange={e => setEmail(e.target.value)}/>
                <TextField id="standard-basic-two" label="Password" onChange={e => setPassword(e.target.value)}/>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Sign up
                </Button>
            </FormGroup>
        </RegisterModalStyle>
    )
}