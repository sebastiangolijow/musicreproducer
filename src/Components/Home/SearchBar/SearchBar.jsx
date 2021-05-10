
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Search, Searchvalue
} from '../../../Redux/actions';

import Style from "./searchbar.module.scss";


export function SearchBar() {
  const dispatch = useDispatch();
  const [Input, setInput] = useState({ input: "" });


  const handlechange = (e) => {
    e.preventDefault();
    setInput({ ...Input, [e.target.name]: e.target.value });
   
  };

  // useEffect(() => {
  //     return dispatch(Search(Input.input))
  // },[Input])
const handleclick = (e) => {
  e.preventDefault();
  return dispatch(Search(Input.input))
}

  return (
    <form>
    <div>
      <input
        className={Style.Input}
        placeholder="Search..."
        onChange={(e) => handlechange(e)}
        value={Input.input}
        name="input"
      ></input>
      <button onClick={handleclick}>ok</button>
    </div>
    </form>
  );
}
