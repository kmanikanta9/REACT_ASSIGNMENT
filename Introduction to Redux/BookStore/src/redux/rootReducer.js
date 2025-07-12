import {combineReducers} from "redux"
import bookReducer from "./reducer"
import filterReducer from "./FilterReducer"

const rootReducer=combineReducers({
    books:bookReducer,
    filtered:filterReducer
})

export default rootReducer;