import { combineReducers } from "redux"

import { reducer as recommendReducer} from "../pages/discover/children/recommend/store"

const cReducer = combineReducers({
  recommend: recommendReducer
})

export default cReducer