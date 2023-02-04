import styled from "styled-components";

export const Form = styled.form`
  width: 430px; 
  background-color: #fff;
  /* border-radius: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  /* box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px; */
  /* box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px; */
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
  padding: 40px 0px;

  /* LAPTOP */
  @media only screen and (max-width: 1115px) {
    width: 100%; 
  }

  >p{
    font-size: 20px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    color: #000;
    text-align: center;
    margin-bottom: 20px;
    /* margin-top: 20px; */

  }
`
export const Wrapper= styled.div`
  width: 85%; 
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Terms = styled.p`
  font-size: 11px; 
  font-weight: bold;
  color: #BAB7D4;
  line-height: 26px;
  margin-top: 5px;

  span {
    color: #FF7979;
  }

  /* MOBILE */
  @media only screen and (max-width: 460px) {
    margin-top: 10px;
    text-align: center;
    line-height: 15px;
  }
`

