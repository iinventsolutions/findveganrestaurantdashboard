import React from 'react'
import { ClaimBtn } from '../style/ClaimButton.styled'

const ClaimButton = ({title}) => {
    return (
        <ClaimBtn>
            {title}
        </ClaimBtn>
    );
};

export default ClaimButton