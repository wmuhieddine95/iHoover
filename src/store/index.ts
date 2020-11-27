import { combineReducers } from "redux"
import { commandReducer } from './asp_command/reducers'
import { locationReducer } from './asp_location/reducers'
import {gridDimensionReducer} from "./grid_dimension/reducers"
export const rootReducer = combineReducers({
  location: locationReducer,
  command: commandReducer,
  griddimension: gridDimensionReducer
})

export type RootState = ReturnType<typeof rootReducer>