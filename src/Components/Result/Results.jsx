import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './showproducts.module.scss'
import {Add} from '../../Redux/actions'
export function Results() {
const dispatch = useDispatch()
const music = useSelector(state => state.music)
console.log(music)
return (
<div>
    {
        music && music.map((item) => (
            <div>
            <Card className={styles.container}>
            <img src={item.artist.picture_medium}></img>
           <CardHeader
           title={item.album.title}>
           </CardHeader>
           <h3 style={{position:'relative', right:'70px'}}>{item.artist.name}</h3>
           <h3 style={{position:'relative', right:'70px'}}>{item.title}</h3>
          <button onClick={() => dispatch(Add(item.id))}
          className={styles.button}>Add to playlist</button>
           </Card>
           <audio id="player">
               <source src={item.preview}/>
           </audio>
         <div>   
        <button onClick={() => document.getElementById('player') && document.getElementById('player').play()}>Play</button>
        <button onClick={() => document.getElementById('player') && document.getElementById('player').pause()}>Pausa</button>
        <button onClick={() => document.getElementById('player').volume+= 0.1}>Volumen +</button>
        <button onClick={() => document.getElementById('player').volume-=0.1}>Volumen -</button>
         </div> 
           </div>
        ))
    }
</div>
    )
}