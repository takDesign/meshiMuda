import React from "react";
import { Link, withRouter } from 'react-router-dom'
import { Form, Button, Container, Row, Alert } from 'react-bootstrap';
import User from "./User";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errMessage: '',
    };
  }

  click = async () => {
    try {
      const a = await User.login(this.state.email, this.state.password);
      console.log(a);
      console.log(User.state.name);

      if (!a === false) {
        this.props.history.push({ pathname: 'dashboard' });
      }

    } catch (e) {
      this.setState({ errMessage: 'Mail address or password is wrong' });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row py-5 mt-4 align-items-center">

          {/* Message */}
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" className="img-fluid mb-3 d-none d-md-block" />
            <h1>Login</h1>
            <p className="font-italic text-muted mb-0">Welcome to Meshi Muda. Let's reduce food waste!</p>
          </div>

          {/* Registeration Form  */}
          <div className="col-md-7 col-lg-6 ml-auto">
            <Form
              className="needs-validation" noValidate>
              {this.state.errMessage && (
                <Alert variant="danger">{this.props.message}</Alert>
              )}
              <div className="row">

                {/* Email Address  */}
                <Form.Group controlId="email" className="col-lg-12">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    onChange={this.handleChange}
                    value={this.state.email}
                    className="form-control bg-white border-left-0 border-md"
                    required
                  />
                </Form.Group>

                {/* Password */}
                <Form.Group controlId="password" className="col-lg-12">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    className="form-control bg-white border-left-0 border-md"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="button" onClick={this.click} className="btn btn-primary btn-block py-2">
                  Login
                </Button>

                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div className="border-bottom w-100 ml-5"></div>
                  <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                  <div className="border-bottom w-100 mr-5"></div>
                </div>

                <div className="text-center w-100">
                  <p className="text-muted font-weight-bold">Don't have an account yet?<Link to='/signUp' className="text-primary ml-2">Sign Up</Link></p>
                </div>

              </div>
            </Form>
          </div>
        </div>
      </div >
    );
  }
}
export default withRouter(Login);