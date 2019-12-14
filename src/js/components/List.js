import React from "react";

const List = () => {
  return (
    <div className="container">
      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        <div className="card rounded shadow-sm border-0">
          <div className="card-body p-4"><img src="https://static.wixstatic.com/media/22874d_5f5e143c83a04636a0a5ebaf391e1bd1~mv2.jpg/v1/fill/w_768,h_768,al_c,q_85/22874d_5f5e143c83a04636a0a5ebaf391e1bd1~mv2.webp" alt="" className="img-fluid d-block mx-auto mb-3" />
            <h5> <a href="#" className="text-dark">Awesome product</a></h5>
            <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p className="small text-muted font-italic">By Jack Black</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default List