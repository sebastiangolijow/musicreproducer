import axios from 'axios'

const SEARCH = 'SEARCH'

// export function Search(name) {
//   console.log(name)
//       return function (dispatch) {
//         let found = fetch('https://api.deezer.com/search?q=eminem')
//           .then((response) => response.json())
//           .then((json) => { return json
//           }).catch((err)=>alert('Ups couldnt find it'))
//           dispatch({ type: SEARCH, payload:found});
//       }
//     }


export function Search(name){
  return async function(dispatch){
    console.log(name)
   let found = await axios.get(`http://localhost:3001/music?name=${name}` )
   dispatch({type:SEARCH, payload: found})
  }
}
export function Add(id){
  return async function(dispatch){
    console.log(id)
   let found = await axios.get(`http://localhost:3001/music?id=${id}` )
   dispatch({type:'FAVORITES', payload: found})
  }
}


export const RemoveFav = (id) => {
  return {
    type: "REMOVE_FAV",
    payload: id,
  };
};