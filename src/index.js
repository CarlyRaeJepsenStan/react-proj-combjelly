import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import BasicExample from './BasicExample.js';
import CircularProgressBar from './ProgressBarCard.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

import './style.css';

root.render(
  <StrictMode>
    <Container>
      <Row>
        <Col>
          <BasicExample />
          <CircularProgressBar />
        </Col>

        <Col>
          <Row>
            <App />
          </Row>

          <Row>
            <App />
          </Row>
        </Col>
      </Row>
    </Container>
  </StrictMode>
);
