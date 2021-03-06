import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import conversation from './lib/personal-website';
import { injectGlobal } from 'styled-components';

// tslint:disable-next-line:no-unused-expression
injectGlobal`
    * {
        padding:0;
        margin:0;
        box-sizing: border-box;
        line-height:24px;
      }
      body {
        background: #F5F8FA;
        height: 100%;
        width: 100%;
        font-family: "-apple-system", "BlinkMacSystemFont", 
        "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
        "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      }
`;

ReactDOM.render(
  <App conversation={conversation} />,
  document.getElementById('root')
);
