import {GridBlock, GridDimension} from "./grid_dimension"

export const UPDATE_GRID = 'UPDATE_GRID'
export const INITIALIZE_GRID_DIMENSION = 'INITIALIZE_GRID_DIMENSION'

interface UpdateGridAction {
    type: typeof UPDATE_GRID,
    payload: GridBlock
  }

  interface InitializeGridDimensionAction {
    type: typeof INITIALIZE_GRID_DIMENSION,
    payload: GridDimension
  }
  
  export type GridActionTypes = UpdateGridAction | InitializeGridDimensionAction