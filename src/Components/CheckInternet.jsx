import React, {useState} from 'react'
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import CloudOffIcon from '@mui/icons-material/CloudOff';

const NoInternet = () => { 
    return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <CloudOffIcon style={{fontSize: 100, color: 'red'}}/>
            <h4 style={{fontSize: '20px'}}>No internet! Try again later</h4>
        </div>
    )
 }

const CheckInternet = () => {

  const [internetStatus, setInternetStatus] = useState(false)
    
  setTimeout(() => {
    setInternetStatus(true)
  }, 10000);

  return (
    <ComWrapper>
        {internetStatus === false? <CircularProgress disableShrink /> : NoInternet()}
    </ComWrapper>
  )
}

export default CheckInternet

const ComWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`