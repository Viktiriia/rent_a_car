import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;

`;

export const Form = styled.form`
  display: flex;
gap:10px;
  margin: 0 auto;
  padding: 20px;
 

`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;