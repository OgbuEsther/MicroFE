import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
const Header = () => {
  return (
    <div>
        <Container>
            <Logo>
                CodeLab
            </Logo>
            <NavHold>
                <Nav to="/">Data Fetching</Nav>
                <Nav to="/todo">To-Do</Nav>
                <Nav to="/state">State Management</Nav>
              
            </NavHold>
            {/* <ButtonHold>
                <Button>Sign Up</Button>
            </ButtonHold> */}
        </Container>
    </div>
  )
}

export default Header

const Button = styled.button`
    width: 100px;
    height: 40px;
    background-color: blue;

`

const ButtonHold = styled.div`
    
`

const Nav = styled(Link)`
margin-left: 10px;
margin-right: 10px;
font-weight: 600;
font-size: 15px;
`

const NavHold = styled.div`
 display   :flex ;
 margin-right: 10px;
`

const Logo = styled.div`
    font-weight: 700;
    font-size: 30px;
    margin-left: 20px;
    cursor: pointer;
`

const  Container = styled.div`
background-color: aliceblue;
width: 100%;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
`