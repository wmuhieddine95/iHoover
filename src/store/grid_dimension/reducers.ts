import {
    GridBlock, GridDimension
  } from './grid_dimension'
  import {
    INITIALIZE_GRID_DIMENSION,
    UPDATE_GRID,
    GridActionTypes
  } from './grid_action_type'
  
  const initialState: GridDimension = {
    x: undefined,
    y: undefined,
    gridlist: []
  }
  
  export function gridDimensionReducer(
    state = initialState,
    action: GridActionTypes
  ): GridDimension {
    switch (action.type) {
      case INITIALIZE_GRID_DIMENSION:
        let gridBlocks : GridBlock[]
        gridBlocks = []
        if(action.payload.x && action.payload.y){
            for(let i=0; i<= action.payload.x;i++){
                for(let j=0; j<=action.payload.y; j++){
                    gridBlocks.push({status: "Dirty", coordinates: {x: i, y: j}})
                }
            }  
          }
          return{
              x: action.payload.x,
              y: action.payload.y,
              gridlist: gridBlocks
          }
      case UPDATE_GRID:
          let updatedList : GridBlock[]
          updatedList = state.gridlist
          let toUpdateIndex = state.gridlist.findIndex((block,index) => {
            if(block.coordinates.x === action.payload.coordinates.x){
                if(block.coordinates.y === action.payload.coordinates.y){
                    return index
                }
            }
          })
          if(toUpdateIndex){
            updatedList[toUpdateIndex] = {coordinates: {x: action.payload.coordinates.x, 
                y: action.payload.coordinates.y}, status: "Clean"}
          }
          return{
              ...state,
              gridlist: updatedList
            } 
      default:
        return state
    }
  }