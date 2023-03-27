import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <ComponentWrapper>
      <p>Coming soon</p>
      <AuthLinks>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign up</Link>
      </AuthLinks>
    </ComponentWrapper>
  )
}

export default LandingPage

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

   >p{
    font-size: 200px;
    font-weight: bold;
   }
`
const AuthLinks = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
`