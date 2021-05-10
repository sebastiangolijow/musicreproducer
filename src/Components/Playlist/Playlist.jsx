import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import {RemoveFav} from '../../Redux/actions'
import styles from './showproducts.module.scss'

export function Playlist(){
const dispatch = useDispatch()
const favorites = useSelector(state => state.favorites)
console.log(favorites)
    return (
        <div>
           {
               favorites && favorites.map((item) => (
                   <div>
                  <div className={styles.container}>
                  <img src={item.artist.picture_medium}></img>
                   <audio id="player">
                   <source src={item.preview}/>
                   </audio>
                   <button onClick={() => dispatch(RemoveFav(item.id))}>Remove</button>
                <div>   
             <button onClick={() => document.getElementById('player') && document.getElementById('player').play()}>Play</button>
             <button onClick={() => document.getElementById('player') && document.getElementById('player').pause()}>Pausa</button>
             <button onClick={() => document.getElementById('player').volume+= 0.1}>Volumen +</button>
          <button onClick={() => document.getElementById('player').volume-=0.1}>Volumen -</button>
         </div> 
            <h3 style={{position:'relative', right:'30px', top:'70px'}}>{item.artist.name}</h3>
                    <h3 style={{position:'relative', right:'70px'}}>{item.title}</h3>
           </div>
     
                    </div>
               ))
           }
        </div>
    )
}