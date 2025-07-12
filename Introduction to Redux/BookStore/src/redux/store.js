
import {createStore} from "redux"
import bookReducer from "./reducer"
import rootReducer from "./rootReducer"

export const store=createStore(rootReducer)

