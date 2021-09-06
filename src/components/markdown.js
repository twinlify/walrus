import React, {useEffect} from 'react';
import styled from 'styled-components';
import PrismJS from 'prismjs';
import marked from 'marked';
import 'prismjs/themes/prism-okaidia.css';
import {device} from '../style/breakpoints';

const $Markup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 13px;
  box-sizing: border-box;
  max-width: 900px;
  width: 100%;

  @media ${device.tablet} {
    font-size: 15px;
  }

  p code,
  li code {
    background-color: #b2bfc2;
    padding: 5px;
    border-radius: 5px;
  }

  pre {
    max-width: 100%;
  }

  h2 {
    padding-top: 30px;
  }

  h3 {
    padding-top: 30px;
  }

  details {
    z-index: 2;
    cursor: pointer;
    background-color: #ddd;
    border-radius: 5px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 80px;
    box-sizing: border-box;

    summary {
      height: 50px;
      display: flex;
      align-items: center;
    }
  }
`;

const Markdown = ({markdown}) => {
  const getMarkdownText = () => ({__html: marked(markdown)});

  useEffect(() => {
    PrismJS.highlightAll();
  }, []);

  return <$Markup dangerouslySetInnerHTML={getMarkdownText()}></$Markup>;
};

export default Markdown;
