import React from 'react'
import styled from 'styled-components'
import PaymentPlanCard from './PaymentPlanCard'
import { PlanDataOne, PlanDataTwo, PlanDataThree } from './PlanData'

const PaymentPlan = () => {
  return (
    <ComponentWrapper>
        <TopSide>
            <h2>Pricing Plans</h2>
            <p>Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
        </TopSide>
        <BottomSide>
              <PaymentPlanCard plandetails={PlanDataOne} />
              <PaymentPlanCard plandetails={PlanDataTwo} />
              <PaymentPlanCard plandetails={PlanDataThree} />
        </BottomSide>
    </ComponentWrapper>
  )
}

export default PaymentPlan

const ComponentWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 90%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #fff;
  border-radius: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 600px) {
      /* height: 100%;
      width: 100%;
      overflow: scroll; */
    }
`

const TopSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    /* border: 1px solid red; */
    
    >p h2{
        font-family: 'Inter', sans-serif;
    }

    @media only screen and (max-width: 600px) {
      >p h2{
        text-align: center;
      } 
    }
`


const BottomSide = styled.div`
    display: flex;
    gap: 50px;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        overflow: scroll;

        ::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }
    }
`