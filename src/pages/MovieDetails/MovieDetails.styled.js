import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BackBtn = styled(Link)`
  display: block;
  color: black;
  border: 2px solid black;
  text-decoration: none;
  width: 100px;
  border-radius: 10px;
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
export const MoreInfoList = styled.p`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);

  justify-content: center;
  justify-items: center;
`;
