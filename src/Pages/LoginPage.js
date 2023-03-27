import React, {useState} from 'react'
import styled from 'styled-components'
import { Form, Wrapper, Terms } from '../style/Form.styled'
import ClaimButton from '../Components/ClaimButton'
import InputField from '../Components/InputField'
import { inputDataLogin } from '../data'
import PaymentPlan from '../Components/PaymentPlan'
import { useOrderContext } from '../Contexts/OrderContex'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import CustomInput from '../Components/CustomInput'
import { useForm } from "react-hook-form";

const LoginPage = () => {

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm();
  // const onSubmit = data => {
  //   console.log(data);
  // }

  const [showPlansection, setShowPlansection] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)


const onSubmit = async(data) => {
  // e.preventDefault()

  if(loading){
    return
  }

  setLoading(true)
  try {
    const res = await Auth.signIn(data.email, data.password)
    console.log(res)
    navigate(`/`, {replace: true})
  } catch (error) {
    // alert("Oops", error.message)
    setErrorMsg(error.message)
  }
  setLoading(false)
    // alert('free trial claimed')
}



  return (
    <PageWrapper>
      {/* <Plan> */}
          {/* {showPlansection && <PaymentPlan onDismiss={onDismiss} setShowPlansection={setShowPlansection} registrationInfo={formData}/>} */}
      {/* </Plan> */}
    <ComponentWrapper>
        <SidePage>
          {/* <p onClick={()=>{setcheckLogin(!checkLogin); navigate(`/`, {replace: true})}}>Login</p> */}
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <p>Login to an account</p>
            {/* {inputDataLogin.map(input => {
                return <InputField key={input.id} {...input} value={formData[input.name]} onChange={changeHandler}/>            
            })} */}
            {inputDataLogin.map(item => <CustomInput
              key={item.id}
              id={item.id}         
              name={item.name}
              placeholder={item.placeholder}
              type={item.type}
              control={control}
              defaultValue=""
              rules={{ required: `${item.errMsg}`, 
               minLength: {
                value: item?.length,
                message: item?.lengthErrMsg
                },
                pattern: {
                  value: item.pattern,
                  message: item.errMsg
                }
              }}/>)}
            <Wrapper>
                
                {errorMsg && <p style={{color: 'red', fontStyle: 'italic', fontSize: 14, marginBottom: 8}}>{errorMsg}</p>}
                <ClaimButton title={loading?'Loading...':'Login'}/>
                <Link to='/forgot-password' style={{color: '#BAB7D4', fontSize: '14px', cursor: 'pointer', marginTop: '10px', textDecoration: 'none'}}>Forgot Password?</Link>
                <Terms>By clicking the button, you are agreeing to our <span>Terms and Services</span></Terms>
                <Link to="/signup" style={{color: '#BAB7D4', fontSize: '14px', cursor: 'pointer'}}>Don't have an account? Create one</Link>
            </Wrapper>
        </Form>
        </MainPage>
    </ComponentWrapper>
    </PageWrapper>
  )
}

export default LoginPage

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

