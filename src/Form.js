import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Form() {
  return (
    <>
      <style type="text/css">
        {`
.btn {
  background-color: purple;
  color: white;
}

.btn:hover {
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
}

.roundcorners {
  border-radius: 100px;
  background-color: blue;
}
`}
      </style>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="roundcorners"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted fff">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
