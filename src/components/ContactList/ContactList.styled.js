import { styled } from 'styled-components';

export const InputWrapper = styled.input`
  border-radius: 5px;
  background-color: #e9e9f7;
  padding: 5px;
  color: #020403;
  border: 1px solid #dadaf7;
  &:focus-visible {
    outline: 1px solid #aeaed6;
  }
`;

export const ButtonWrapper = styled.button`
  width: 150px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: red;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  background: #e62222;
  &,
  span {
    transition: 200ms;
  }
  .text {
    transform: translateX(35px);
    color: white;
    font-weight: bold;
  }
  .icon {
    position: absolute;
    border-left: 1px solid #c41b1b;
    transform: translateX(110px);
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 15px;
    fill: #eee;
  }
  &:hover {
    background: #ff3636;
  }
  &:hover .text {
    color: transparent;
  }
  &:hover .icon {
    width: 150px;
    border-left: none;
    transform: translateX(0);
  }
  &:focus {
    outline: none;
  }
  &:active .icon svg {
    transform: scale(0.8);
  }
`;

export const LiElem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
`;
