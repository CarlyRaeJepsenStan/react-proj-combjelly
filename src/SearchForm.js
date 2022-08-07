/*

form:

*/
import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchForm() {
  <Form>
    <Form.Label>Email address</Form.Label>
    <Form.Control
      className="roundcorners"
      type="email"
      placeholder="Enter email"
    />
    <Form.Text className="text-muted fff">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form>;
}
