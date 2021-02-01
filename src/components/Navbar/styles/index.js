import styled from 'styled-components';

export const NavbarStyle = styled.nav `
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    -webkit-box-shadow: 10px 10px 74px -34px rgba(0,0,0,0.4);
    -moz-box-shadow: 10px 10px 74px -34px rgba(0,0,0,0.4);
    box-shadow: 10px 10px 74px -34px rgba(0,0,0,0.4);

    .wrapInitialContent .logo {
        color: #853ce6;
        font-size: 18px;
        font-weight: 500;
        margin-left: 24px;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;
    }

    ul li {
        font-size: 16px;
        position: relative;
    }

    li a {
        color: #000;
        text-decoration: none;
        font-weight: 500;
        padding: 0px 16px;
    }

    ul li:after {
        content: '';
        position: absolute;
        background-color: #853ce6;
        top: 43px;
        left: 0;
        height: 6px;
        width: 100%;
    }

    .wrapInitialContent {
        display: flex;
        align-items: center;
    }

    .MuiFormLabel-root {
        color: #000;
        font-weight: 500;
        font-size: 16px;
    }

    .MuiFilledInput-root {
        background-color: #fff;
        opacity: 0.4;
    }

    .MuiInputBase-root {
        color: #000;
    }

    .searchBar {
        margin: 0px 24px;
    }

    .userBtns button {
        margin: 0px 8px;
    }

    .userBtns p {
        display: inline-block;
        margin-right: 16px;
        font-size: 18px;
    }

    .userBtns p span {
        color: #853ce6;
        font-weight: 500;
    }

    .MuiButton-containedPrimary {
        background-color: #853ce6;
    }

    .MuiButton-containedPrimary:hover {
        background-color: #853ce6;
        opacity: 0.9;
    }

    
`
