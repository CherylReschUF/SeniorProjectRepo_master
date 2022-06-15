import React from "react";

function Home() {
  return (
    <div className="home" style={{backgroundColor: "#FA4616"}}>
      <div className="container" style={{backgroundColor: "#FA4616"}}>
          <center>
          <br /><h1 className="font-weight-light">Welcome to the Gator Software Security Learning Platform! <br /></h1>
            <br />
            <p>
            A learning platform for undergraduate students. 
            </p>
          </center>
      </div>

      <div className="container" style={{alignItems: "center", backgroundColor: "#09ac70"}}>
        <div className="row align-items-center my-5" style={{paddingLeft: 510}}>
          <center>            
            <p>
              
              <br /><br /> 
            </p>
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="GatorReadsBook.png"
              alt=""
            /> 
          </center>
        </div>
      </div><br /> 
    </div>

  );
}

export default Home;