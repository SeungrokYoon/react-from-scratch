# React from Scratch

This repository is aimed at exploring various methodologies and practical usage of React, whilst ceaselessly searching for better ways to construct sustainable and scalable react-components.

If you are moire interested in the history of my project,

please visit my blog post [here](https://velog.io/@seungrok-yoon/React-18-CRA-%EC%97%86%EC%9D%B4-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

React version: react@18.2.0

## Configuration History

## 1. Install react

```javascipt
yarn add react react-router-dom
```

### Directory structure so far

```text
src
|- App.js
|- index.js
.gitignore;
package-json
package-lock.json
```

Write pacakge.json by

- [npm Docs](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)
- [Yarn Docs](https://classic.yarnpkg.com/en/docs/)

### Change index.js

Write index.js code with createRoot API function of React

reference: [createRoot](https://react.dev/reference/react-dom/client/createRoot)

```javascript
//index.js
import { createRoot } from 'react-dom/client';
import App from './App';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);
```

### Webpack

```text
yarn add webpack webpack-cli -D
npx webpack init
```
