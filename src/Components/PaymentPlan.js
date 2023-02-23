import React, {useState} from 'react'
import styled from 'styled-components'
import PaymentPlanCard from './PaymentPlanCard'
import { DataStore } from 'aws-amplify' 
import { RestaurantOwner } from '../models/index';
import PaystackPop from '@paystack/inline-js';
import { usePaystackPayment } from 'react-paystack';
import { PlanDataOne, PlanDataTwo, PlanDataThree } from './PlanData'
import CloseIcon from '@mui/icons-material/Close';
// import { useRestaurantOwnerContext } from '../Contexts/RestaurantOwnerContext';
import { useRestaurantContex } from '../Contexts/RestaurantContext';
import { useRestaurantOwnerContext } from '../Contexts/RestaurantOwnerContext';

const PaymentPlan = ({registrationInfo, setShowPlansection, onDismiss}) => {

  const { sub } = useRestaurantContex();
  const { setCheckOwnerExistence } = useRestaurantOwnerContext();

  console.log("sub in PaymentPlan", sub)

  const [selectedPlan, setSelectedPlan] = useState()
  const [checkError, setCheckError] = useState(null)
  const [status, setStatus] = useState(null)
  const [checkUserExistence, setCheckUserExistence] = useState(false)

  const alertvalues = {
      firstname: registrationInfo.firstname,
      lastname: registrationInfo.lastname,
      email: registrationInfo.email,
      phone: registrationInfo.phone,
      address: registrationInfo.address,
      dob: registrationInfo.dob,
      planstatus: selectedPlan
  }

  const checkExistingUsers = async () => { 

    const existingRecord = await DataStore.query(RestaurantOwner, (er)=> er.email.eq(registrationInfo.email))

    if (existingRecord.length > 0) {
      console.log("Owner already in the system: ", existingRecord)
      setCheckError(new Error("A record with this email address already exists."));
      setStatus("error");
      } else {
        setCheckUserExistence(true)
      }


    
   }

   const saveRestaurantOwner = async () => { 
    try {
      await DataStore.save(
        new RestaurantOwner({
          firstname: registrationInfo.firstname,
          lastname: registrationInfo.lastname,
          email: registrationInfo.email,
          phone: registrationInfo.phone,
          address: registrationInfo.address,
          dob: registrationInfo.dob,
          planstatus: selectedPlan,
          sub: sub
      })).then((res)=>{console.log('saveRestaurantOwner response',res)})
      setStatus('success')
      setCheckError(null)
      
    } catch (error) {
        console.log("RestaurantOwner save error", error);
        setCheckError(error)
        setStatus('error')
    }
    
  };




  const handleCardClick = (cardId) => {
    // alert(`Payment Plan with ID ${cardId} was clicked`)

    checkExistingUsers();
    
    if(checkUserExistence==true){

        if(cardId === 1){
          setSelectedPlan('BASIC')
        }
        else if(cardId === 2){
          setSelectedPlan('PREMIUM')
        }
        else if(cardId === 3){
          setSelectedPlan('SUPER')
        }
        else{
          setSelectedPlan(null)
        }

        if(!selectedPlan){
          return
        }



        const paystack = new PaystackPop({ close: false });
        paystack.newTransaction({
            reference: (new Date()).getTime().toString(),
            key: 'pk_test_f38f4ed39ec5301f0cc6784799288b023132b805',
            amount: JSON.stringify(100),
            email: 'darkolawrence@gmail.com',
            callback: function(response) {
              console.log(response);
                if (response.status === 'success') {
                  // alert(JSON.stringify(alertvalues, null, 2))
                  saveRestaurantOwner()

                }
            },

            onclose: function() {
              console.log('Payment closed');
            }
        })

        setSelectedPlan(null)
        setCheckUserExistence(false)
    }
  }

  return (
    <ComponentWrapper>
        <TopSide>
          <div></div>
          <div>
            <h2>Pricing Plans</h2>
            <p>Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
          </div>
          <div>
              <CloseIcon style={{ marginRight: 20, cursor: 'pointer' }} onClick={() => setShowPlansection(false)} />
          </div>

        </TopSide>
        <BottomSide>
              <PaymentPlanCard plandetails={PlanDataOne} onCardClick={() => handleCardClick(PlanDataOne[0].id)}/>
              <PaymentPlanCard plandetails={PlanDataTwo} onCardClick={() => handleCardClick(PlanDataTwo[0].id)} />
              <PaymentPlanCard plandetails={PlanDataThree} onCardClick={() => handleCardClick(PlanDataThree[0].id)} />
        </BottomSide>
          {checkError && <StatusMessage>
            <p>{checkError.message}</p>
            </StatusMessage>}

            {status === 'success' && <StatusMessage successcolor>
            <p onClick={()=>setCheckOwnerExistence(false)}>Account created! Click here to start</p>
            </StatusMessage>}

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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    /* border: 1px solid red; */
    width: 100%;
    
    >p h2{
        font-family: 'Inter', sans-serif;
    }

    @media only screen and (max-width: 600px) {
      >p h2{
        text-align: center;
      } 
    }

    div:nth-child(2){
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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

const StatusMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    height: 50px;
    width: 80%;
    /* background-color: #FA6565; */
    background-color: ${props => props.successcolor ? 'green' : '#FA6565'};
    margin-top: 20px;
    cursor: pointer;

    >p{
      color: white;
    }
`