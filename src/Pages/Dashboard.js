import React from 'react'
import styled from 'styled-components'
import SwapVertIcon from '@mui/icons-material/SwapVert';
import OrderShortListItem from '../Components/OrderShortListItem';
import DashboardCard from '../Components/DashboardCard';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import TimelineIcon from '@mui/icons-material/Timeline';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import DashboardChart from '../Components/DashboardChart';
import { useNavigate } from 'react-router-dom';
import Grid from 'antd/es/card/Grid';

const Dashboard = () => {

  const navigate = useNavigate();

  return (
    <ComponentWrapper>
      <Header>
        <p>Top Orders</p>
        <div style={{display: 'flex', gap: 10, cursor: 'pointer'}}>
          <Sort>
            <SwapVertIcon />
            <p>sort by</p>
          </Sort>
          <NewResButton onClick={()=>navigate('add-restaurant')}>
            <p>New restaurant</p>
          </NewResButton>
        </div>
      </Header>

      <OrderShortList>
        <OrderShortListItem />
        <OrderShortListItem />
        <OrderShortListItem />
        <OrderShortListItem />
      </OrderShortList>

      <AnalyticsCards>
        <DashboardCard PercentSymbol={<CallMadeOutlinedIcon style={{fontSize: 10, color: '#43BE83'}}/>} icon={<ShoppingCartCheckoutIcon />}/>
        <DashboardCard PercentSymbol={<CallReceivedOutlinedIcon style={{fontSize: 10, color: '#43BE83'}}/>} icon={<TimelineIcon />}/>
        <DashboardCard PercentSymbol={<CallMadeOutlinedIcon style={{fontSize: 10, color: '#43BE83'}}/>} icon={<FeedOutlinedIcon />}/>
        <DashboardCard PercentSymbol={<CallMadeOutlinedIcon style={{fontSize: 10, color: '#43BE83'}}/>} icon={<PeopleAltOutlinedIcon />}/>
      </AnalyticsCards>

      <GraphAndCard>
        <GraphWrapper>
          {/* <DashboardChart /> */}
        </GraphWrapper>
        <CardWrapper>

        </CardWrapper>
      </GraphAndCard>

    </ComponentWrapper>
  )
}

export default Dashboard

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-right: 110px;

  > p {
    font-weight: 500;
    margin-left: 50px;
  }
`
const Sort = styled.div`
  display: flex;
  width: 80px;
  height: 25px;
  border-radius: 8px;
  border: 1px solid #E7E7E7;
  opacity: 0.8;
  /* background-color: #E7E7E7; */
`
const OrderShortList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  /* border: 1px solid red; */
  border-radius: 8px;
  margin-top: 20px;
  align-items: center;
  gap: 20px;
  padding-right: 110px;
`
const AnalyticsCards = styled.div`
  display: flex;
  width: 95%;
  height: 120px;
  border-radius: 10px;
  justify-content: space-between;
  /* border: 1px solid red; */
  margin-top: 20px;
  /* gap: 10px; */
`
const GraphAndCard = styled.div`
  display: flex;
  width: 95%;
  border-radius: 20px;
  margin-top: 20px;
  height: 230px;
  /* border: 1px solid red; */
  justify-content: space-between;
`
const GraphWrapper = styled.div`
  display: flex;
  width: 63%;
  border-radius: 20px;
  /* margin-top: 20px; */
  height: 100%;
  border: 1px solid gray;
`
const CardWrapper = styled.div`
  display: flex;
  width: 35%;
  border-radius: 20px;
  /* margin-top: 20px; */
  height: 100%;
  border: 1px solid gray;
`
export const NewResButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 25px;
  background-color: #FF9900;
  border-radius: 3px;
  cursor: pointer;
  >p{
    color: #fff;
    font-size: 12px;
  }
`

