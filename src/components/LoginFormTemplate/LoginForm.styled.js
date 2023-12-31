import { styled } from 'styled-components';

export const LogFormElem = styled.form`
  width: 190px;
  padding: 25px;
  margin: 0 auto;
  background: #f4f6fb;
  border: 1px solid white;
  box-shadow: 10px 10px 64px 0px rgba(105, 105, 105, 0.75);
  -webkit-box-shadow: 10px 10px 64px 0px rgba(105, 105, 105, 0.75);
  -moz-box-shadow: 10px 10px 64px 0px rgba(105, 105, 105, 0.75);

  .card_header {
    display: flex;
    align-items: center;
  }

  svg {
    color: #7878bd;
    margin-bottom: 20px;
    margin-right: 5px;
  }

  .form_heading {
    display: block;
    padding-bottom: 20px;
    font-size: 21px;
    color: #7878bd;
  }

  .field {
    padding-bottom: 10px;
  }

  input {
    border-radius: 5px;
    background-color: #e9e9f7;
    padding: 5px;
    width: 100%;
    color: #7a7ab3;
    border: 1px solid #dadaf7;
  }

  input:focus-visible {
    outline: 1px solid #aeaed6;
  }

  input::placeholder {
    color: #bcbcdf;
  }

  label {
    color: #b2bac8;
    font-size: 14px;
    display: block;
    padding-bottom: 4px;
  }

  button {
    background-color: #7878bd;
    margin-top: 10px;
    font-size: 14px;
    padding: 7px 12px;
    height: auto;
    font-weight: 500;
    color: white;
    border: none;
  }

  button:hover {
    background-color: #5f5f9c;
  }
`;
