import todoApp from "./reducer";

import {createStore} from "redux"


const store=createStore(todoApp)

export default store;