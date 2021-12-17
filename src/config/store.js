
import { createStore } from 'redux'
import rootReducer from '../reducers'

let initialState = {
    squadre: [],
    squadra: {
        giocatori: []
    },
    classifica: [],
    marcatori: [],
    isLoading: false
}

const store = createStore(rootReducer, {...initialState}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store