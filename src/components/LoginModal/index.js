import { useState } from 'react';

import { useSnackbar } from '../../context/snackbar';

import firebase from 'firebase';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';

import LoginModalStyle from './style';

export default function LoginModal({ handleClose }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setOpen, setMessage, setStatus } = useSnackbar();

    function handleSubmit() {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                handleClose();
            })
            .catch((err) => {
                const { message } = err;
                setStatus('error');
                setMessage(message)
                setOpen(true);
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