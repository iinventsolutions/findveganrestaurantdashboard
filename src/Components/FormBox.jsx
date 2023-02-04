import React, { useState } from 'react'
import { Form, Wrapper, Terms } from '../style/Form.styled'
import ClaimButton from './ClaimButton'
import InputField from './InputField'
import { inputData } from '../data'

const FormBox = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    // onSubmit Handler Function
    const submitHandler = (e) => {
        e.preventDefault()
        alert('free trial claimed')
    }

    //onChange Handler Function
    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    return (
        <Form onSubmit={submitHandler}>
            {inputData.map(input => {
                return <InputField key={input.id} {...input} value={formData[input.name]} onChange={changeHandler}/>            
            })}
            <Wrapper>
                <ClaimButton />
                <Terms>By clicking the button, you are agreeing to our <span>Terms and Services</span></Terms>
            </Wrapper>
        </Form>
    )
}

export default FormBox