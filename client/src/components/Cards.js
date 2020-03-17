import React, { Component } from "react";
import img1 from "../assets/images/linkedin.jpeg";
import img2 from "../assets/images/health.jpg";
import img3 from "../assets/images/science.jpg";
import img4 from "../assets/images/sports.jpg";
import img5 from "../assets/images/entertainment.jpg";
import img6 from "../assets/images/business.jpg";

import Card from "./Card";

function Cards(props) {
  //console.log("~~~~~~~~~~~~~~~~~~~~~~~>"+JSON.stringify(props.list.categories.technology));

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-4">
          <Card
            imgsrc={img1}
            title="Technology"
            mycards={props.list.categories.technology}
            // onClick={props.handleClick}
            id="technology"
            // href="#"
          />
        </div>
        <div className="col-md-4">
          <Card
            imgsrc={img4}
            title="Sports"
            mycards={props.list.categories.sports}
          />
        </div>
        <div className="col-md-4">
          <Card
            imgsrc={img3}
            title="Science"
            mycards={props.list.categories.science}
          />
        </div>
        {/* <div className="col-md-4">
          <Card
            imgsrc={img4}
            title="General"
            mycards={props.list.categories.general}
          />
        </div> */}
        <div className="col-md-4">
          <Card
            imgsrc={img2}
            title="Health"
            mycards={props.list.categories.health}
          />
        </div>
        <div className="col-md-4">
          <Card
            imgsrc={img6}
            title="Business"
            mycards={props.list.categories.business}
          />
        </div>
        <div className="col-md-4">
          <Card
            imgsrc={img5}
            title="Entertainment"
            mycards={props.list.categories.entertainment}
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
