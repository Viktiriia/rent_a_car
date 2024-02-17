import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import carImage from '../../images/car.jpg';

export const Wrapper = styled.main`
  height: calc(100vh - 60px);
  background-image: url(${carImage});
  background-size: cover;
  background-position: center;
  padding-top: 120px;
`;

export const Title = styled.h1`
  font-size: 90px;
  font-weight: 600;
  background-image: radial-gradient(ellipse, #101cb9, #14c3cf);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  text-align: center;
`;

export const Button = styled(NavLink)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  border-radius: 8px;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
  box-shadow: 3px 3px rgba(142, 141, 248, 0.473), -1em 0 .6em rgb(58, 162, 223);
  padding: 10px 16px;
  font-size: 16px;
  text-decoration: none;
  &:hover {
    background-color: rgba(2, 88, 248, 0.438);
  }
`;