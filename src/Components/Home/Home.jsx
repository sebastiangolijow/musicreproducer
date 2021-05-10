import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {SearchBar} from './SearchBar/SearchBar'
import {Results} from '../Result/Results.jsx'
import {Playlist} from '../Playlist/Playlist'

export function Home(){
      const music = useSelector(state => state.music)

    return (
     <div>
        <SearchBar></SearchBar>
        <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)'}}>
        <Results/>
        <Playlist/>
        </div>
     </div>
    )}