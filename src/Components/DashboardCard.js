import React from 'react'
import styled from 'styled-components'


const DashboardCard = ({icon, PercentSymbol}) => {
  return (
    <ComponentWrapper>
        <Left>
            <p>Product sold</p>
            <h2>25.3k</h2>
            <Percentage>
                <div style={{height: 15, width: 15, backgroundColor: '#B5FFCE', display: 'flex', borderRadius: '100px', justifyContent: 'center', alignItems: 'center'}}>{PercentSymbol}</div>
                <p>+15%</p>
            </Percentage>
        </Left>
        <Right>
            {icon}
            <p>View Report</p>
        </Right>
    </ComponentWrapper>
  )
}

export default DashboardCard

const ComponentWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 23%;
    border: 1px solid #D3CBFB;
    border-radius: 15px;
    padding: 23px 30px;
    justify-content: space-between;
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > h2 {
        font-family: 'Andika', sans-serif;
    }

    > p:nth-child(1){
        color: #AFAFAF;
        font-size: 12px;
    }

`
const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    >p{
        font-size: 10px;
        font-weight: 600;
        color: #5041BC;
        text-decoration: underline;
    }
`
const Percentage = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;

    >p {
        color: #6AD2A0;
        font-size: 11px;
    }
`