import React, {useState} from 'react'
import styled from 'styled-components'
import { Form, Wrapper, Terms } from '../style/Form.styled'
import ClaimButton from './ClaimButton'
import InputField from './InputField'
import { inputData } from '../data'
import PaymentPlan from './PaymentPlan'
import { useOrderContext } from '../Contexts/OrderContex';
import { Link } from 'react-router-dom'

const Onboard = ({onDismiss}) => {

  const {setcheckLogin, checkLogin} = useOrderContext()

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    dob: '',
    phone: '',
    address: '',

})

  const [showPlansection, setShowPlansection] = useState(false)


// onSubmit Handler Function
const submitHandler = (e) => {
    e.preventDefault()
    setShowPlansection(true)
    // alert('free trial claimed')
}

//onChange Handler Function
const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}

  return (
    <PageWrapper>
      {/* <Plan> */}
          {showPlansection && <PaymentPlan onDismiss={onDismiss} setShowPlansection={setShowPlansection} registrationInfo={formData}/>}
      {/* </Plan> */}
    <ComponentWrapper>
        <SidePage>
          <p onClick={()=>setcheckLogin(!checkLogin)}>Login</p>
          <Logo>
              <img src="/images/signlogo.png" alt="logo" />
          </Logo>
          <TitleWrapper>
            <h1>Super simplified customer service</h1>
          </TitleWrapper>
          <TitleWrapper style={{ width: '400px' }}>
            <p>Providing users with a comprehensive and regularly updated database of vegan-friendly restaurants shops and products.</p>
          </TitleWrapper>
          <TitleWrapper style={{ width: '400px' }}>
            <img src='/images/reviews.png' height='40px'width='250px' alt='reviews' />
          </TitleWrapper>
          
            {/* <div onClick={onDismiss}>
            Got it!
          </div> */}
        </SidePage>
        <ImageWrapper>
            <img src="/images/signuparrow.png"  alt="onboard" />
        </ImageWrapper>
        <MainPage>
        <Form onSubmit={submitHandler}>
          <p>Create an account</p>
            {inputData.map(input => {
                return <InputField key={input.id} {...input} value={formData[input.name]} onChange={changeHandler}/>            
            })}
            <Wrapper>
                <ClaimButton title={'Sign up'}/>
                <Terms>By clicking the button, you are agreeing to our <span>Terms and Services</span></Terms>
                <Link to="/login" style={{color: '#BAB7D4', fontSize: '14px', cursor: 'pointer'}}>Already have an account? Login</Link>
            </Wrapper>
        </Form>
        </MainPage>
    </ComponentWrapper>
    </PageWrapper>
  )
}

export default Onboard

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    background-color: #ffffff;


    @media only screen and (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;
      overflow: scroll;
      gap: 30px;
    }

`

const SidePage = styled.div`
    display: flex;
    flex-direction: column;
    width: 43%;
    justify-content: center;
    /* align-items: center; */
    background-color: #ffffff;
    overflow: hidden;
    /* border-right: 1px solid #e1e1e1; */
    padding: 20px;
    /* border: 1px solid red; */

    @media only screen and (max-width: 600px) {
      width: 100%;
      height: auto;
      padding-bottom: 30px;
    }
`

const MainPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    background-color: #ffffff;
    overflow: hidden;
    padding: 20px;
    /* border: 1px solid blue; */
    /* border-left: 1px solid #e1e1e1; */

    @media only screen and (max-width: 600px) {
      width: 100%;
    }
    
`

const TitleWrapper = styled.div`
    width: 600px;
    margin-left: 150px;
    /* border: 1px solid red; */

    >h1{
      font-size: 50px;
      line-height: 60px;
      margin-bottom: 10px;
      font-family: 'Inter', sans-serif;
      font-weight: bold;
    }

    >p{
      font-family: 'Inter', sans-serif;
      margin-bottom: 20px;
    }

    @media only screen and (max-width: 600px) {
      margin-left: 0px;
      width: 100%;
      /* padding: 5px; */

      >h1{
        font-size: 40px;
      }
    }
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 85%;
  width: 17%;
  /* border: 1px solid red; */

  @media only screen and (max-width: 600px) {
      display: none;
    }
  
`
const Logo = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  /* >img{
    width: 100px;
    height: 100px;
  } */
`

const Plan = styled.div`
  position: absolute;
  /* display: flex; */
  height: 80%;
  width: 80%;
  /* border: 1px solid red; */
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #fff;
  border-radius: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const PageWrapper = styled.div`
  /* position: relative; */
  /* overflow: scroll; */
`

