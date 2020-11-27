import { GridDimension } from "../grid_dimension/grid_dimension"
import {Location} from "./asp_location"
export const HANDLE_A = 'HANDLE_A'
export const HANDLE_G = 'HANDLE_G'
export const HANDLE_D = 'HANDLE_D'
export const INITIALIZE_LOCATION = 'INITIALIZE_LOCATION'

interface HandleActionA {
  type: typeof HANDLE_A,
  payload: GridDimension
}

interface HandleActionG {
  type: typeof HANDLE_G
}

interface HandleActionD {
    type: typeof HANDLE_D
}

interface InitializeAction {
  type: typeof INITIALIZE_LOCATION,
  payload: Location
}

export type LocationActionTypes = HandleActionA | HandleActionG | HandleActionD | InitializeAction