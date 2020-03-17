import React from "react";
import "./card-style.css";
//import Navbar from "./Navbar.js";

import "bootstrap/dist/css/bootstrap.min.css";

function Card(props) {
  let desc = "";
  let items = "";
  try {
    // console.log("propppppppppppppppppppppppppppppps..."+JSON.stringify(props.mycards[0].desc));
    desc = props.mycards[0].desc;
    let count = 0;
    items = props.mycards
      .slice(0, 5)
      .map((item, key) => <li key={item.id}>{item.desc}</li>);
  } catch (e) {}

  /*getHeadlines = (props)=>{
        const categories = this.state.categories;
        API.getHeadlines().then(data=>{
           data.data.sources.map(article=>{
              let cat = article.category;
              categories[cat].push({desc:article.description, url:article.url})
           })
           this.setState({categories:categories})
        }) 
     } */

  function handleClick(e) {
    console.log(e.target.id);
    console.log("card clicked!");
    props.handleClick(null, e.target.id);
  }

  return (
    <div className="card text-center" onClick={handleClick} id={props.id}>
      {" "}
      <div className="overflow">
        <img
          src={props.imgsrc}
          alt="image 1"
          className="card-img-top"
          id={props.id}
        />
      </div>
      <div className="card-body text-dark" id={props.id}>
        <h3
          id={props.id}
          className="card-title"
          style={{ fontFamily: "'Playfair Display', serif", colort: "grey" }}
        >
          {props.title}
        </h3>
        {/* <p className="card-text text-secondary"> {desc}  </p> */}
        {/* <button type="button" className="btn btn-link">Read More</button> */}
        {/* <ul>{items}</ul> */}
      </div>
    </div>
  );
}

export default Card;
