// -----------------------------------------------------------------------------

import React from 'react';
import styled from 'styled-components';
import {device} from '../style/breakpoints';
import {primary} from '../style/colors';

// -----------------------------------------------------------------------------

const $HeaderWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #ededed;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

const $Header = styled.div`
  max-width: 1300px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  position: relative;
  text-align: left;
  align-items: center;

  @media ${device.tablet} {
    font-size: 30px;
  }
`;

const $Logo = styled.img`
  height: 42px;
  margin-right: 10px;
  border: 1px solid;
  border-radius: 50%;
  padding: 2px;
  box-sizing: border-box;
`;

const $Title = styled.div`
  color: ${primary};
  font-size: 19px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;

    &:hover {
      color: inherit;
    }
  }

  @media ${device.tablet} {
    font-size: 30px;
  }
`;

const $Name = styled.span``;

const $Subtitle = styled.span`
  font-size: 22px;
  font-weight: bold;
  margin-left: 10px;
  padding-left: 10px;
  border-left: 3px solid ${primary};
  visibility: hidden;

  @media ${device.tablet} {
    visibility: visible;
  }
`;

const $Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;

  @media ${device.tablet} {
    font-size: 17px;
  }

  a {
    color: ${primary};
    font-weight: 500;
    text-decoration: none;
    padding: 0 10px;

    &:hover {
      color: #444;
    }

    &.active {
      background-color: ${primary};
      color: #fff;
      border-radius: 5px;
      padding: 6px 10px;
    }
  }
`;

// -----------------------------------------------------------------------------

const Header = (props) => {
  const {subtitle, onSubtitleClick, children} = props;

  return (
    <$HeaderWrapper>
      <$Header>
        <$Title>
          <a href="https://twinlify.com" target="_blank">
            <$Logo src="https://static.twinlify.com/logos/logo-square.svg" />
            <$Name>Twinlify</$Name>
          </a>
          <$Subtitle onClick={onSubtitleClick}>{subtitle}</$Subtitle>
        </$Title>
        <$Links>{children}</$Links>
      </$Header>
    </$HeaderWrapper>
  );
};

// -----------------------------------------------------------------------------

export default Header;
