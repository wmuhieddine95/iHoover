import {
    GridBlock, GridDimension
  } from './grid_dimension'
  import {
    INITIALIZE_GRID_DIMENSION,
    UPDATE_GRID,
    GridActionTypes
  } from './grid_action_type'
  
  const initialState: GridDimension = {
    x: 10,
    y: 10,
    gridlist: []
  }
  
  export function gridDimensionReducer(
    state = initialState,
    action: GridActionTypes
  ): GridDimension {
    switch (action.type) {
      case INITIALIZE_GRID_DIMENSION:
        console.log("In Reducer Grid Dimension with payload "+ action.payload)
        let gridBlocks : GridBlock[]
        gridBlocks = []
        if(action.payload.x && action.payload.y){
            for(let i=0; i< action.payload.x;i++){
                for(let j=0; j<action.payload.y; j++){
                    gridBlocks.push({status: "Dirty", coordinates: {x: i, y: j}})
                }
            }  
          }
          return{
              ...state,
              x: action.payload.x,
              y: action.payload.y,
              gridlist: gridBlocks}
      case UPDATE_GRID:
        let updatedList : GridBlock[]
        if(state.gridlist!==undefined){
          updatedList = state.gridlist  
          if(updatedList!==undefined){
            let toUpdateIndex = state.gridlist.findIndex((block,index) => {
              if(block.coordinates.x === action.payload.x){
                  if(block.coordinates.y === action.payload.y){
                      return index
                  }
              }    
            })
          if(toUpdateIndex>=0){
            updatedList[toUpdateIndex] = {coordinates: {x: action.payload.x, 
                y: action.payload.y}, status: "Clean"}
                return{
                  ...state,
                  gridlist: updatedList
                }               
              }
        }}return state;
      default:
        return state
    }
  }