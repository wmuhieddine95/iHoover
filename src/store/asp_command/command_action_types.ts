import { GridDimension } from "../grid_dimension/grid_dimension"
import {AspCommandState, AspCommand} from "./asp_commands"
export const ADD_COMMAND = 'ADD_COMMAND'
export const EXECUTE_COMMAND = 'EXECUTE_COMMAND'

interface AddCommandAction {
  type: typeof ADD_COMMAND
  payload: AspCommand
}

interface ExecuteCommandAction {
  type: typeof EXECUTE_COMMAND,
  payload: GridDimension
}

export type CommandActionTypes = AddCommandAction | ExecuteCommandAction