import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

export default function CircularUnderLoad() {
  return (
    <Wrapper>
      <CircularProgress disableShrink />
    </Wrapper>
  ) ;
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`