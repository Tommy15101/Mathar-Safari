import React from 'react'
import styled from 'styled-components'
import NavbarLogo from './NavbarLogo'
import NavbarMenu from './NavbarMenu'

const Navbar = () => {
    return (
        <NavContainer>
            <NavbarLogo />
            <NavbarMenu />
        </NavContainer>
    )
}

export default Navbar


//Styled - Components//
const NavContainer = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    background-color: red;
    border-bottom: 2px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    @media screen and (max-width: 810px) {

    }
`