import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color:#B7322C;
    color:#fff;
    padding: 20px;
    font-size: 20px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`

const Error = ({children}) => {
    return (
        <Texto>
            {children}
        </Texto>
      )
}

export default Error



