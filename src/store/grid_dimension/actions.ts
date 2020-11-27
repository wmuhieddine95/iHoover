import {GridBlock, GridDimension, GridCoordinates} from "./grid_dimension"
import { GridActionTypes, UPDATE_GRID, INITIALIZE_GRID_DIMENSION } from './grid_action_type'

export function updateGrids(toBeUpdated : GridCoordinates): GridActionTypes{
  return {
    type: UPDATE_GRID,
    payload: toBeUpdated
  }
}

export function setGridDimension(gridCoordinates : GridCoordinates): GridActionTypes{
    return {
      type: INITIALIZE_GRID_DIMENSION,
      payload: gridCoordinates
    }
}  
