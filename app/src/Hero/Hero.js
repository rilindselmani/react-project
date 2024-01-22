import React from "react";
import { useState, useEffect } from "react";
import "./hero.css";

const Hero = () => {
  const url = "https://dummyjson.com/products/1";

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const [keyword, setKeyword] = useState("");

  return (
    <div className="hero-component">
      <div className="heroComponentBackground">
        <form className="search">
          <input
            type="search"
            placeholder="Search posts here"
            value={keyword}
            onChange={(evt) => setKeyword(evt.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Hero;
