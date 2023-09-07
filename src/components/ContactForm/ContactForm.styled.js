import { styled } from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  input {
    padding: 15px 20px;
    outline: none;
    background: transparent;
    border-radius: 5px;
    color: #212121;
    border: 1px solid#212121;
    font-size: 1em;
  }
  span {
    position: absolute;
    left: 0;
    font-size: 0.9em;
    transform: translateX(14px) translateY(-7.5px);
    padding: 0 6px 1px 5px;
    border-radius: 2px;
    background: #e8e8e8;
    letter-spacing: 1px;
    border: 1px solid #212121;
    color: #212121;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonWrapper = styled.button`
border: none;
background-color: rgb(195, 176, 145);
border-radius: 0.9em;
padding: 0.8em 1.2em 0.8em 1em;
transition: all ease-in-out 0.2s;
font-size: 16px;
width: 160px;
span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 600;
   }
   &:hover,
   &:focus {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
   }
   &:active {
    transform: translate(2px,2px);
   }
`;
