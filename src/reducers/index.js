import {LISTA_SQUADRE,SQUADRA, LOADING, CLASSIFICA} from '../config/actionReducer'

export default function reducer (state = {squadre: []}, action){
    switch (action.type){
        case LISTA_SQUADRE:
            return {
                ...state,
                squadre: action.payload,
                isLoading: false
            }
        case SQUADRA:
            return {
                ...state,
                squadra: action.payload,
                isLoading: false
            }
        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case CLASSIFICA:
            return {
                ...state,
                classifica: action.payload,
                isLoading: false
            }
        default: return state
    }
   
}