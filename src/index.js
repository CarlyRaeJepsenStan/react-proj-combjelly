import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Card from './Card.js';
import ProgressBar from './ProgressBar.js';

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
          <Card name="a" />
          <ProgressBar />
        </Col>

        <Col>
          <Row>
            <Card name="Asdf" / >
          </Row>

          <Row>
            <Card name="asdfsdfadfasdfadf" />
          </Row>
        </Col>
      </Row>
    </Container>
  </StrictMode>
);
