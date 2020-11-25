import {GridBlock, GridDimension} from "./grid_dimension"
import { GridActionTypes, UPDATE_GRID, INITIALIZE_GRID_DIMENSION } from './grid_action_type'

export function updateGrids(toBeUpdated : GridBlock): GridActionTypes{
  return {
    type: UPDATE_GRID,
    payload: toBeUpdated
  }
}

export function setGridDimension(gridDimension : GridDimension): GridActionTypes{
    return {
      type: INITIALIZE_GRID_DIMENSION,
      payload: gridDimension
    }
}  
