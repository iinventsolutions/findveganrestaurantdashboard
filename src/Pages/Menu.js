import React from 'react'
import styled from 'styled-components'
import MenuItem from '../Components/MenuItem'

const Menu = () => {
  return (
    <ComponentWrapper>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </ComponentWrapper>
  )
}

export default Menu

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
  /* border: 1px solid black; */
  padding: 15px 15px;
  gap: 4rem;
  overflow: auto;
`