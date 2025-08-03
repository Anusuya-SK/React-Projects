import React from 'react';
import styled from "styled-components";

function Button({ label, style, action }) {
  return (
    <div>
        <StyledButton onClick={action} style={style}>
            {label}
        </StyledButton>
        <hr />
    </div>
  )
}

const StyledButton = styled.button`
  background-color: blue;
  font-size: 15px;
  border-radius: 5px;
  color: #fff;
  padding: 15px;
  border: 1px solid #fff;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`;

export default Button