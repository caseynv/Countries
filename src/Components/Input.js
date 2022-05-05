import React, { useState, useEffect } from "react";


import Body from "./Body";

function Input() {

      const [items, setItems] = useState([]);

      // Note: the empty deps array [] means
      // this useEffect will run once
      // similar to componentDidMount()
      useEffect(() => {
        fetch("https://restcountries.com/v2/all")
          .then((res) => res.json())
          .then(
            (result) => {
              setItems(result);
              
            }
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
          );
    });

    
  return (
    <>
      <div className="input-group">
        <div className="input-left">
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Search for a country..."
            />
          </div>
        </div>
        <div className="input-right">
          <div className="dropdown">
            <button
              className="btn btn-input btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Filter by Region
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" type="button">
                Africa
              </button>
              <button className="dropdown-item" type="button">
                America
              </button>
              <button className="dropdown-item" type="button">
                Asia
              </button>
              <button className="dropdown-item" type="button">
                Europe
              </button>
              <button className="dropdown-item" type="button">
                Oceania
              </button>
            </div>
          </div>
        </div>
      </div>
      <Body items={items}/>
    </>
  );
}

export default Input;
