import React from "react";
import { useState } from "react";
import "./hero.css";

const Hero = () => {
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
