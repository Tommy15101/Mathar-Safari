import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavbarLinks = ({ open }) => {
    return (
        <LinksContainer toggle={open}>
            <NavLink to="/">
                <li onClick={}>Home</li>
            </NavLink>

            <NavLink to="safari">
                <li onClick={}>Safari</li>
            </NavLink>

            <NavLink to="meet-mathar">
                <li onClick={}>Meet Mathar</li>
            </NavLink>

            <li>Contact</li>
        </LinksContainer>
    )
}

export const LinksContainer = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    width: 35rem;
    margin-right: 5rem;
    li {
        color: white;
        text-transform: uppercase;
        letter-spacing: .15rem;
    }

    @media (max-width: 760px) {
        display: flex;
        flex-flow: column nowrap;
        position: fixed;
        transform: ${({ toggle }) => toggle ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
        top: 3rem;
        right: 0;
        width: 100%;
        height: 50vh;
        text-align: center;
        margin: 0;
        li {
            color: black;
        }
    }
`

export default NavbarLinks