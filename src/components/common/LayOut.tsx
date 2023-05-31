import React from 'react'
import Header from '../static/Header'
import {Outlet} from "react-router-dom"
import styled from 'styled-components'

const LayOut = () => {
  return (
    <div>
        <Header />
     <Container>
     <Outlet />
     </Container>
    </div>
  )
}

export default LayOut

const Container = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
`
