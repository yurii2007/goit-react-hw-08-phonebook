import { styled } from "styled-components";

export const UserMenuWrapper = styled.div`
align-items: center;
  p {
    margin: 0;
  }
`

export const BtnLogout = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: .3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
    background-color: rgb(195, 176, 145);
  
  /* plus sign */
  .sign {
    width: 100%;
    transition-duration: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .sign svg {
    width: 17px;
  }
  
  .sign svg path {
    fill: white;
  }

  .text {
    position: absolute;
    right: 0%;
    width: 0%;
    opacity: 0;
    color: white;
    font-size: 1.2em;
    font-weight: 600;
    transition-duration: .3s;
  }

  &:hover {
    width: 115px;
    border-radius: 40px;
    transition-duration: .3s;
  }
  
  &:hover .sign {
    width: 30%;
    transition-duration: .3s;
  }

  &:hover .text {
    opacity: 1;
    width: 60%;
    transition-duration: .3s;;
  }
  /* button click effect*/
  &:active {
    transform: translate(2px ,2px);
  }
`