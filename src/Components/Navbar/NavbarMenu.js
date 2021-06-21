import React, { useState } from 'react'
import styled from 'styled-components'
import NavbarLinks, { LinksContainer } from './NavbarLinks'

export const Hamburger = styled.div`
    display: none;
    @media screen and (max-width: 810px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: .5rem;
        right: 2rem;
        div {
            width: 2rem;
            height: 0.25rem;
            background-color: ${({ open }) => open ? '#ccc' : '#333'};
            border-radius: 10px;
            transform-origin: 1px;
            transition: all 0.3s linear;

            &:nth-child(1) {
                transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
            }
            &:nth-child(2) {
                transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
                opacity: ${({ open }) => open ? 0 : 1};
            }
            &:nth-child(3) {
                transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
            }
        }
    }
`

const NavbarMenu = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Hamburger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </Hamburger>
            <NavbarLinks open={open} />
            <LinksContainer open={!open}/>
        </>
    )
}

export default NavbarMenu
