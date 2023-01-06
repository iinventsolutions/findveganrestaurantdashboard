import React from 'react'
import styled from 'styled-components'

const OrderListItem = () => {
  return (
    <ComponentWrapper>
        <p>#55555</p>
        <p>26 March 2020</p>
        <p>Emilia Johanson</p>
        <p>$251.16</p>
        <div className='status'><p>Delivered</p></div>
        <div className='cash'><p>Cash</p></div>
        <p>12:48 pm</p>
    </ComponentWrapper>
  )
}

export default OrderListItem


const ComponentWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    margin-bottom: 5px;
    padding: 5px 10px;
    /* justify-content: center; */
    align-items: center;

    >p:nth-last-child(1){
        margin-right: 0px;
    }

    > p{
        margin-right: 9%;
        font-weight: bold;
        font-size: 15px;
        font-family: "Roboto", sans-serif;
    }

    > div{
        margin-right: 9%;
    }
`