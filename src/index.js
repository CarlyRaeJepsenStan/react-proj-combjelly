import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import BasicExample from "./BasicExample.js";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <App />
    <BasicExample />
  </StrictMode>
);
