import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
export const StyledInput = styled.input`
  height: 30px;
  width: 400px;
  text-align: center;
  margin-bottom: 5px;
`;
export const SubmitBtn = styled.button`
  font-weight: 500;
  display: block;
  color: black;
  width: 100px;
  border: none;
  border-radius: 10px;
  border: 2px solid black;
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  &:hover,
  :focus {
    background-color: green;
  }
`;
