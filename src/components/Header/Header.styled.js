import { styled } from 'styled-components';

export const HeaderEl = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 1.7rem;
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
    color: #111111;
  }

  .active {
    color: #e42828;
  }
`;
