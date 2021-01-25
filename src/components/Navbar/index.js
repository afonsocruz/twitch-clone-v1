import { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import { useUser } from '../../context/user';

import { NavbarStyle } from './styles'

import { TextField, Button, Modal } from '@material-ui/core'

import LoginModal from '../LoginModal';
import RegisterModal from '../RegisterModal';

import firebase from 'firebase';

export default function Navbar() {

    const { user, setUser } = useUser();

    useEffect(() => {
        console.log(user);
    }, [user])

    const [signInOpen, setSignInOpen] = useState(false);
    const [signUpOpen, setSignUpOpen] = useState(false);


    const handleSignInOpen = () => {
        setSignInOpen(true);
    }
    const handleSignInClose = () => {
        setSignInOpen(false);
    }
    const handleSignUpOpen = () => {
        setSignUpOpen(true);
    }
    const handleSignUpClose = () => {
        setSignUpOpen(false);
    }

    const handleLogout = () => {
        firebase.auth().signOut();
    }


    return (
        <Router>
            <NavbarStyle>
                <div className="wrapInitialContent">
                    <Link to="/">Twitch Clone</Link>
                    <ul>
                        <li>
                            <Link to={"/esports"}>Esports</Link>
                        </li>
                        <li>
                            <Link to={"/music"}>Music</Link>
                        </li>
                    </ul>
                </div>

                <form className="searchBar">
                    <TextField id="filled-basic" label="Search" variant="filled" />
                </form>
                
                <div className="userBtns">
                    {
                        user != null ? (
                            <>
                                <p>Bem vindo <span>{user.email}!</span></p>
                                <Button variant="contained" color="primary" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </>
                        ): 
                        (
                            <>
                                <Button variant="contained" color="primary" onClick={handleSignInOpen}>
                                    Login
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleSignUpOpen}>
                                    Sign up
                                </Button>
                            </>
                        )
                    }
                </div>

                <Modal
                    open={signInOpen}
                    onClose={handleSignInClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                 >
                    <LoginModal handleClose={() => setSignInOpen(false)} />
                </Modal>

                <Modal
                    open={signUpOpen}
                    onClose={handleSignUpClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <RegisterModal handleClose={() => setSignUpOpen(false)}/>
                </Modal>
            </NavbarStyle>
        </Router>
    )
}