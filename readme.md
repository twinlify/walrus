<p align="center">
  <a href="https://www.twinlify.com">
    <img width="150" alt="twinlify" src="https://static.twinlify.com/logos/logo.svg"/>
  </a>
</p>

# 🦭 walrus

Bunch of ES modules to use in [bundled](https://esbuild.github.io/) frontends.

## common style

```js
import {globalStyle} from '@twinlify/walrus';

const GlobalStyle = createGlobalStyle`${globalStyle}`;

const createApp = () => (
  <>
    <GlobalStyle />
    <App />
  </>
);
```

## common header

```js
import {Header as CommonHeader} from '@twinlify/walrus';

const App = () => {
  return (
    <CommonHeader subtitle="Your App" onSubtitleClick={() => console.log('click')}>
      ...children
    </CommonHeader>
  );
};
```

## components

```jsx
import {ReloadAnchor, ScrollToTop} from '@twinlify/walrus';

const createApp = () => (
  <>
    <ScrollToTop />
    <ReloadAnchor />
    <App />
  </>
);
```
