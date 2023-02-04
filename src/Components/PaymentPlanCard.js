import React from 'react'
import styled from 'styled-components'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PaymentPlanCard = ({plandetails}) => {

    const selectPlan = () => { 
        alert('free trial claimed')
     }

  return (
    <ComponentWrapper>
        <Header>
            <h1>¢10/mth</h1>
            <p>Basic plan</p>
        </Header>
        <Content>
              {plandetails[0].items.map((item) => (<Item>
                <CheckCircleIcon style={{ color: '#D1FADF' }}/>
                <p>{item}</p>
            </Item>))}
        </Content>
          <Footer onClick={() => {selectPlan()}}>
            <p>Get started</p>
        </Footer>
        
    </ComponentWrapper>
  )
}

export default PaymentPlanCard

const ComponentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 340px;
    border-radius: 10px;
    height: 420px;
    border: 1px solid #F7F7F7;
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
`
const Header = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding: 20px;

    >h1 {
        font-size: 30px;
        font-weight: bold;
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* margin-bottom: 20px; */
    padding: 20px;

`
const Item = styled.div`
    display: flex;
    margin-bottom: 10px;
    /* justify-content: center; */

    >p{
        margin-left: 10px;
        
    }

`


const Footer = styled.div`
    display: flex;
    width: 90%;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: #2FA94E;
    border-radius: 5px;
    cursor: pointer;

    >p{
        font-size: 13px;
        color: #fff;
    }
`
