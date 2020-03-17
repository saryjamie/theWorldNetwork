import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar.js";
import Form from "./components/Form";
import API from "./utils/API";
import Pollscard from "./components/Pollscard";
import tech from "./assets/tech.json";
import NewsList from "./components/Newslist";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = function() {
  const [currentUser, setCurrentUser] = useState({ username: null, id: null });
  const [categorypolls, setCategorypolls] = useState("politics");

  //added to check if newsList disappears
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [catPoll, setCatPoll] = useState({ catPoll: [] });
  const [newsList, setNewsList] = useState({ newsList: [] });
  const [news, setNews] = useState({ news: [] });
  const [categories, setCategories] = useState({
    categories: {
      business: [],
      general: [],
      entertainment: [],
      sports: [],
      health: [],
      science: [],
      technology: []
    }
  });

  useEffect(() => {
    getPolls(categorypolls);
    getNews_();
  }, [categorypolls]);

  useEffect(() => {
    getNews_();
    getCategories();
  }, [newsList]);

  const changeCurrentUser = user => {
    console.log(user);
    setCurrentUser(user);
  };

  const handleCategoryChange = evt => {
    setCategorypolls(evt.target.value);
  };

  const handleChoice = evt => {
    console.log(evt.target.innerHTML);
    console.log(evt.target.parentNode);
  };

  const getCategories = () => {
    let categories_ = {
      business: [],
      general: [],
      entertainment: [],
      sports: [],
      health: [],
      science: [],
      technology: []
    };
    API.getHeadlines().then(data => {
      data.data.sources.map(article => {
        let cat = article.category;
        categories_[cat].push({ desc: article.description, url: article.url });
      });
      setCategories({ categories: categories_ });
    });
  };

  const getPolls = param => {
    return API.getPolls(param || "").then(data => {
      console.log(data.data.polls);
      setCatPoll({ catPoll: data.data.polls });
      console.log(catPoll);
    });
  };

  const getNews_ = param => {
    API.getNews(param || "").then(data => {
      setNews({ news: data.data.articles });
    });
  };

  const handleClick = e => {
    //e.preventDefault()
    console.log(e.target.id);
    getNews_(`&category=${e.target.id}`);
    setCategorypolls(e.target.id);
  };

  return (
    <div
      className="App"
      // style={{ backgroundImage: "url('./assets/images/banner.jpg')" }}
    >
      <div
        className="text-center"
        style={{
          color: "white",
          fontSize: "30px",
          backgroundColor: "darkred",
          fontFamily: "'Playfair Display', serif"
        }}
      >
        {" "}
        THE WORLD NETWORK
      </div>
      <div
        className="text-center"
        style={{
          color: "white",
          fontSize: "20px",
          backgroundColor: "darkred",
          fontFamily: "'Josefin Slab', serif"
        }}
      >
        News You Can Use {currentUser.username || ""}
      </div>

      {/* signin authentication goes here */}

      {/* <Form /> */}

      <Navbar handleClick={handleClick} changeCurrentUser={changeCurrentUser} />

      {/* {tech.map(politic => (
        <Pollscard
          id={politic.id}
          key={politic.id}
          name={politic.name}
          optionOne={politic.optionOne}
          optionTwo={politic.optionTwo}
          handleChoice={handleChoice}
        />
      ))} */}

      <Cards list={categories} />
      <Footer />
      <NewsList list={news} />

      <Footer />
    </div>
  );
};

export default App;
