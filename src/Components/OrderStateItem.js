import React from 'react'
import styled from 'styled-components'


const OrderState = ({title, icon, number}) => {
  return (
    <ComponentWrapper>
        {icon}
        <p>{title}</p>
        <div style={{backgroundColor: '#8F8F8F', padding: '1px 2px'}}>
            <p>{number}</p>
        </div>
    </ComponentWrapper>
  )
}

export default OrderState


const ComponentWrapper = styled.div`
    display: flex;
    height: 30px;
    gap: 0.2rem;
    align-items: center;
    justify-content: center;

    > p {
        font-size: 12px;
        font-weight: bold;
        color: #8F8F8F;
    }

    > div > p{
        font-size: 12px;
        font-weight: bold;
        color: #333;
    }
`