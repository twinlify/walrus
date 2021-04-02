import {primary} from './colors';

export const globalStyle = `
body {
  margin: 0;
  padding: 0;
  background-color: #ededed;
  font-weight: 200;
  font-size: 17px;
  font-family: Poppins;
}

a {
  color: ${primary};
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #444;
  }
}`;
