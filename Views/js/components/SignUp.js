import React from "react";
import { Link } from 'react-router-dom'
import { Button, Form, Col } from 'react-bootstrap';

export default class SignUp extends React.Component {
  handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  render() {
    return (
      <div className="container">
        <div className="mt-4 align-items-center">
          <h2>Sign Up</h2>
          <Form className="w-100" action="http://localhost:8080/vanarts/term4/meshi_muda/api.php" method="POST" onValidSubmit={this.handleSubmit}>
            <Form.Control type="hidden" name="controller" value="authentication" />
            <Form.Control type="hidden" name="route" value="signup" />
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter Last Name" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control as="select" required>
                <option value="vancouver">Vancouver</option>
                <option value="burnaby">Burnaby</option>
                <option value="richmond">Richmond</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
          <div className="mt-4 w-100">
            <p className="text-muted">Already Registered? <a href="#" className="text-primary ml-2">Login</a></p>
          </div>
        </div>
      </div>
    );
  }
}