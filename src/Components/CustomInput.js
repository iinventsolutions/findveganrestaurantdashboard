import React, { useState } from 'react'
import { Input, Wrapper, Error} from '../style/InputField.styled'
import styled from 'styled-components';
import { Controller } from 'react-hook-form';

const CustomInput = ({ type, name, control, defaultValue, rules, placeholder, inputHeight}) => {


    return (
        <Wrapper>
            <Controller 
                name={name}
                control={control}
                rules={rules}
                render={({field: {value, onBlur, onChange}, fieldState: {error, invalid}})=>(
                    <>
                        <InputField 
                            inputHeight
                            defaultValue={defaultValue}
                            placeholder={placeholder}        
                            type={type}
                            id={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            style={{border: invalid? '2px solid red' : '1px #DEDEDE solid'}}
                        />
                        {invalid && <Error style={{color: 'red', alignSelf: 'stretch'}}>{error?.message || 'Error'}</Error>}
                    </>
                )}
            />

        </Wrapper>
    );
};

export default CustomInput;

const InputField = styled.input`
    width: 100%;
    /* height: 45px; */
    height: ${(props) => (props.inputHeight ? props.inputHeight : '45px')};
    padding: 5px 25px; 
    font-size: 16px;
    font-weight: 600;
    color: #3D3B48;
    border-radius: 5px;
    border: 1px #DEDEDE solid;
`