import React from 'react';
import styled from 'styled-components';
import fb from '../../img/fb.png';
import instagram from '../../img/instagram.png';
import './navbar.css';


const Container = styled.div `
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 0px auto;
    color: var(--subtle);
    border-bottom: var(--border);
`;

const Navbar = () => {
    return(
        <Container>
            <p>Nadácia Good Boy</p>
            <div>
                <img src={fb}></img>
                <img src={instagram}></img>
            </div>
        </Container>
    )
}

export default Navbar;