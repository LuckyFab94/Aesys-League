import axios from 'axios';
import store from '../config/store'
import { LISTA_SQUADRE, PARTITE,SQUADRA } from './actionReducer';

const API = 'http://api.football-data.org/v2/competitions/SA/matches/';
const LOCAL_API = 'http://localhost:3001'

export const getMatch = () =>{
    axios.get(API,{
      headers:{
        'X-Auth-Token': '974b0b974fff45e6a1c6336d4ca290fb'
      }
    })
  .then((res)=>console.log(res.data))
  .catch((err)=>console.log(err))
}

export const getSquadre = () =>{
  axios.get(`${LOCAL_API}/squadre`).then((res)=>{
    store.dispatch({
      type: LISTA_SQUADRE,
      payload: res.data
    });
  }).catch((err)=>console.log(err))
}

export const getSquadra = (id) =>{
  axios.get(`${LOCAL_API}/squadre/${id}`).then((res)=>{
    store.dispatch({
      type: SQUADRA,
      payload: res.data
    });
  }).catch((err)=>console.log(err))
}
