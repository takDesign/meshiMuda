import React from "react";

export default class List extends React.Component {
  render() {
    return (
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        <div className="card rounded shadow-sm border-0">
          <div className="card-body p-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556485076/shoes-1_gthops.jpg" alt="" className="img-fluid d-block mx-auto mb-3" />
            <h5> <a href="#" className="text-dark">Awesome product</a></h5>
            <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p className="small text-muted font-italic">By Jack Black</p>
          </div>
        </div>
      </div>
    );
  }
}