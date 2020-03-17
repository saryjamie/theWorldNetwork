import React, { useState, useEffect } from "react";
import "./card-style.css";

const Newslistitem = ({ news }) => {
  useEffect(() => {
    setProfileState(news);
  }, [news]);

  const [profileState, setProfileState] = useState(news);

  return (
    <div className="news" className="container-fluid justify-content-md-center">
      <div className="card text-center" style={{ width: "200", height: "400" }}>
        <img
          src={news.urlToImage}
          className="card-img-top"
          alt="image"
          size="200x200"
        ></img>
        <div className="card-body">
          <h6 className="card-text">{news.title}</h6>
          {/* <p className="card-text">{news.content}</p> */}
          <a
            className="card-text btn btn-outline-danger"
            href={news.url}
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

const NewsList = props => {
  useEffect(() => {
    setProfileState(props);
  }, [props]);

  const [profileState, setProfileState] = useState(props);

  return (
    <div className="card-container">
      <div className="row">
        <div className="col-md-4">
          {profileState.list.news.map(function(name, index) {
            return <Newslistitem news={name} />;
          })}
        </div>
        <div className="col-md-4">
          {profileState.list.news.map(function(name, index) {
            return <Newslistitem news={name} />;
          })}
        </div>
        <div className="col-md-4">
          {profileState.list.news.map(function(name, index) {
            return <Newslistitem news={name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
