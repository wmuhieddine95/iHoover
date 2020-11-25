import {
    Location
  } from './asp_location'
  import {
    HANDLE_G,
    HANDLE_D,
    HANDLE_A,
    INITIALIZE_LOCATION,
    LocationActionTypes
  } from './location_action_types'
  
  const initialState: Location = {
    x: 0,
    y: 0,
    orientation: "N"
  }
  
  export function locationReducer(
    state = initialState,
    action: LocationActionTypes
  ): Location {
    switch (action.type) {
      case HANDLE_G:
          switch(state.orientation){
            case "N": return {
                ...state,
                orientation: "W"
            }
            case "E": return {
                ...state,
                orientation: "N"
            }
            case "S": return {
                ...state,
                orientation: "E"
            }
            case "W": return {
                ...state,
                orientation: "S"
            }
        }
      case HANDLE_D:
        switch(state.orientation){
            case "N": return {
                ...state,
                orientation: "E"
            }
            case "E": return {
                ...state,
                orientation: "S"
            }
            case "S": return {
                ...state,
                orientation: "W"
            }
            case "W": return {
                ...state,
                orientation: "N"
            }        
        }
      case HANDLE_A:
        switch(state.orientation){
            case "N": return {
                ...state,
                y: state.y+1
            }
            case "E": return {
                ...state,
                x: state.x+1
            }
            case "S": return {
                ...state,
                y: state.y-1
            }
            case "W": return {
                ...state,
                x: state.x-1
            }        
        }
      case INITIALIZE_LOCATION:
          return{
              ...action.payload
          }
      default:
        return state
    }
  }