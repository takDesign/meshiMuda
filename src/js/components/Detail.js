import React from "react";

const Detail = () => {
  return (
    <div className="container">

      {/* Portfolio Item Heading  */}
      <h1 className="my-4">Page Heading
    <small>Secondary Text</small>
      </h1>

      {/* Portfolio Item Row  */}
      <div className="row">

        <div className="col-md-8">
          <img className="img-fluid" src="http://placehold.it/750x500" alt="" />
        </div>

        <div className="col-md-4">
          <h3 className="my-3">Project Description</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
          <h3 className="my-3">Project Details</h3>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Dolor Sit Amet</li>
            <li>Consectetur</li>
            <li>Adipiscing Elit</li>
          </ul>
        </div>

      </div>
      {/* < /.row  */}

      {/* Related Projects Row  */}
      <h3 className="my-4">Related Projects</h3>

      <div className="row">

        <div className="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
          </a>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
          </a>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
          </a>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
          </a>
        </div>

      </div>
      {/* /.row  */}

    </div>
  );
}
export default Detail