import {LISTA_SQUADRE,SQUADRA} from '../config/actionReducer'

export default function reducer (state = {}, action){
    switch (action.type){
        case LISTA_SQUADRE:
            return {
                ...state,
                squadre: action.payload
            }
        case SQUADRA:
            return {
                ...state,
                squadra: action.payload
            }
    }
}