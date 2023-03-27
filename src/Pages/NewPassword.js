import React from 'react'
import styled from 'styled-components'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box, Typography, Paper } from '@material-ui/core'
import CustomInput from '../Components/CustomInput';
import { useForm } from "react-hook-form";
import { useAuthContex } from '../Contexts/AuthContext';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const NewPassword = () => {

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm();
  const { verificationEmail } = useAuthContex();
  const [loading, setLoading] = React.useState(false)

  const onSubmitPressed = async(data) => {
    // navigation.navigate('Home');
    if(loading){
      return
    }

    setLoading(true)
    try {
      await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
      alert("Success", "Password resetted successfully")
      navigate(`/login`, {replace: true});
    } catch (error) {
      alert(error.message)
    }

    setLoading(false)
  };

  const onResendPress = async() => {
    try {
      await Auth.resendSignUp(verificationEmail);
        alert('code resent successfully');
    } catch (err) {
        alert('error resending code: ', err.message);
    }
  };

  return (
    
    <ComponentWrapper>
      <Paper style={{width: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CustomCard>
        <MailOutlineIcon style={{color: '#56D963'}}/>
        <Typography variant='h3' component='h6' style={{fontSize: 30}}>Check your email</Typography>
        <Box style={{width: '220px'}}><Typography variant='p' component='p' style={{fontSize: 11, textAlign: 'center'}}>We sent a verification link to olivia@untitledui.com</Typography></Box>
        <CustomInput        
            name="username"
            placeholder="Enter Email Address"
            // type={item.type}
            control={control}
            defaultValue=""
            rules={{ required: "This is a required field"}}
            />

        <CustomInput        
            name="code"
            placeholder="Enter code"
            control={control}
            defaultValue=""
            rules={{ required: "This is a required field"}}
            />

        <CustomInput        
            name="password"
            placeholder="Enter new password"
            // type={item.type}
            control={control}
            defaultValue=""
            rules={{ required: "This is a required field"}}/>

        <CustBtn onClick={handleSubmit(onSubmitPressed)}>{loading? 'Submitting...': 'Submit'}</CustBtn>
        <Typography variant='p' component='p' style={{fontSize: 13, textAlign: 'center', fontWeight: 400, color: '#667085', cursor: 'pointer'}}>Didn't receive the e-mail? <span style={{color: '#2FA94E'}}>Click to resend</span></Typography>
        <Typography variant='p' component='p' style={{fontSize: 13, textAlign: 'center', fontWeight: 500, color: '#667085'}} onClick={onResendPress}>Back to login</Typography>
      </CustomCard>
      </Paper>
    </ComponentWrapper>

  )
}

export default NewPassword

const ComponentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  /* height: 60vh; */
`
const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  gap: 10px;
  /* border: 1px solid red; */
  /* margin-top: 100px; */
  /* height: 60vh; */
`
const CustBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 230px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#2FA94E')};
  border-radius: 5px;
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
`