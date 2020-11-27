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
        break;
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
            case "N": 
            console.log("orient:" + state.orientation)
            if(action.payload.y!==undefined){
                if(state.y < action.payload.y){
                    const newY= state.y+1
                    return {
                        ...state,
                        y: newY
                    }        
                }    
            }break;
            case "E": 
            if(action.payload.x){
                if(state.x < action.payload.x){
                    return {
                        ...state,
                        x: state.x+1
                    }
                }
            }break;
            case "S": 
            if(action.payload.y){
                if(state.y > 0){
                    return {
                        ...state,
                        y: state.y-1
                    }
                }
            }break;
            case "W": 
            if(action.payload.x){
                if(state.x > 0){
                    return {
                        ...state,
                        x: state.x-1
                    }                
                }
            }break;
        }return state;
      case INITIALIZE_LOCATION:
          return{
              ...state,
              ...action.payload
          } 
      default:
        return state
    }
  }
  