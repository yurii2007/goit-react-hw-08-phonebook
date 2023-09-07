import { styled } from 'styled-components';

export const HeaderEl = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 1.7rem;
  padding: 20px 20px;
  border-bottom: 1px solid #111111;
  nav {
    display: flex;
    gap: 12px;
    list-style-type: none;
  }
  div {
    display: flex;
    gap: 12px;
    list-style-type: none;
  }

  a {
    display: block;
    text-decoration: none;
    color: #020403;
  }

  a:hover,
  a:active {
    opacity: 0.7;
    text-shadow: 3px 3px 20px #ff99cc,
    -2px 1px 30px #ff99cc;
  }

  .active {
    color: #E7DECC;
    text-shadow: 3px 3px 20px #ff99cc,
    -2px 1px 30px #ff99cc;
  }
`;
