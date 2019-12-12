import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="row py-5 mt-4 align-items-center">

        {/* Message */}
        <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
          <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" className="img-fluid mb-3 d-none d-md-block" />
          <h1>Create an Account</h1>
          <p className="font-italic text-muted mb-0">Create a minimal registeration page using Bootstrap 4 HTML form elements.</p>
          <p className="font-italic text-muted">Snippet By <a href="https://bootstrapious.com" className="text-muted">
            <u>Bootstrapious</u></a>
          </p>
        </div>

        {/* Registeration Form  */}
        <div className="col-md-7 col-lg-6 ml-auto">
          <form action="#">
            <div className="row">

              {/* First Name */}
              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-user text-muted"></i>
                  </span>
                </div>
                <input id="firstName" type="text" name="firstname" placeholder="First Name" className="form-control bg-white border-left-0 border-md" />
              </div>

              {/* Last Name */}
              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-user text-muted"></i>
                  </span>
                </div>
                <input id="lastName" type="text" name="lastname" placeholder="Last Name" className="form-control bg-white border-left-0 border-md" />
              </div>

              {/* Email Address  */}
              <div className="input-group col-lg-12 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-envelope text-muted"></i>
                  </span>
                </div>
                <input id="email" type="email" name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md" />
              </div>

              {/* Password */}
              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-lock text-muted"></i>
                  </span>
                </div>
                <input id="password" type="password" name="password" placeholder="Password" className="form-control bg-white border-left-0 border-md" />
              </div>

              <div className="form-group col-lg-12 mx-auto mb-0">
                <a href="#" className="btn btn-primary btn-block py-2">
                  <span className="font-weight-bold">Create your account</span>
                </a>
              </div>

              <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                <div className="border-bottom w-100 ml-5"></div>
                <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                <div className="border-bottom w-100 mr-5"></div>
              </div>

              <div className="text-center w-100">
                <p className="text-muted font-weight-bold">Already Registered? <a href="#" className="text-primary ml-2">Login</a></p>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login