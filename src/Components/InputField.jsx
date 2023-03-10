import React, { useState } from 'react'
import { Input, Wrapper, Error} from '../style/InputField.styled'

const InputField = (props) => {
    const [focused, setFocused] = useState(false)
    const { id, errMsg, onChange, ...inputData } = props

    const focusHandler = (e) => {
        setFocused(true)
    }

    // console.log("Hey ",inputData)

    return (
        <Wrapper>
            <Input {...inputData} onChange={onChange} onBlur={focusHandler} focused={focused}/>
            <Error>{errMsg}</Error>
        </Wrapper>
    );
};

export default InputField;