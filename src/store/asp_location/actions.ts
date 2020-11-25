import {Location} from "./asp_location"
import { LocationActionTypes, HANDLE_G, HANDLE_A, HANDLE_D, INITIALIZE_LOCATION } from './location_action_types'

export function oneSquareForward(): LocationActionTypes{
  return {
    type: HANDLE_A
  }
}

export function orientToRight(): LocationActionTypes{
    return {
      type: HANDLE_D
    }
}  

export function orientToLeft(): LocationActionTypes{
  return {
    type: HANDLE_G
  }
}

export function initializeLocation(givenLocation: Location): LocationActionTypes{
  return {
    type: INITIALIZE_LOCATION,
    payload: givenLocation
  }
}