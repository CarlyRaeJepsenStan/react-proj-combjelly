import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Card(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{props.name}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

