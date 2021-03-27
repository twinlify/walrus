<p align="center">
  <a href="https://www.twinlify.com">
    <img width="150" alt="twinlify" src="https://static.twinlify.com/logos/logo.svg"/>
  </a>
</p>

# walrus

Bunch of ES modules to use in [bundled](https://esbuild.github.io/) frontends.

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
