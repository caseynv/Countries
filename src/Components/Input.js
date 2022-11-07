import React, { useState} from "react";


import Body from "./Body";

function Input() {

      const [items, setItems] = useState([]);
      const [selectregion, setselectregion] = useState("");
      const [selectname, setselectname] = useState("");


      const handlechange = (event) => {
        setselectregion(event.target.value)
      }

      const handlechangename = (event) => {
        setselectname(event.target.value)
      }

      if(selectregion !== ""){
        
          fetch(`https://restcountries.com/v3.1/region/${selectregion}`)
            .then((res) => res.json())
            .then((result) => {
              setItems(result);
            });
        ;
      }
      else if (selectname !== ""){
        fetch(`https://restcountries.com/v3.1/name/${selectname}`)
        .then((res) => res.json())
            .then((result) => {
              setItems(result);
            });
      }
      else{
      fetch("https://restcountries.com/v2/all")
          .then((res) => res.json())
          .then(
            (result) => {
              setItems(result);
              
            });
    };

    
  return (
    <>
      <div className="input-group">
        <div className="input-left">
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input
            onChange={handlechangename}
              type="text"
              className="form-control"
              placeholder="Search for a country..."
            />
          </div>
        </div>
        <div className="input-right">
          <div>
            <select value={selectregion} onChange={handlechange}>
              <option selected>Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">
                Asia
              </option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
      <Body items={items} />
    </>
  );
}

export default Input;
