import React from 'react'
import styled from 'styled-components'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const OrderShortListItem = () => {
  return (
    <ComponentWrapper>
        <p>Lawrence Darko</p>
        <p>$2540.58</p>
        <p>150 Products</p>
        <p>+Gold</p>
        <MoreVertIcon style={{color: '#5041BC'}} />
    </ComponentWrapper>
  )
}

export default OrderShortListItem

const ComponentWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #EAEAEA;
    justify-content: space-between;
    align-items: center;
    padding-left: 60px;
    padding-right: 60px;

    > p:nth-child(1){
        color: #AFAFAF;
    }

    > p:nth-child(2){
        font-weight: bold;
        font-family: "Roboto", sans-serif;
    }

    > p:nth-child(3){
        color: #AFAFAF;
    }

    > p:nth-child(4){
        color: #F8A94C;
    }

`