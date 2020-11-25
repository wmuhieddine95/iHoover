import { AspCommandState, AspCommand } from './asp_commands'
import { ADD_COMMAND, EXECUTE_COMMAND, CommandActionTypes } from './command_action_types'

export function addCommand(newCommand: AspCommand): CommandActionTypes{
  return {
    type: ADD_COMMAND,
    payload: newCommand
  }
}

export function executeCommand(): CommandActionTypes{
    return {
      type: EXECUTE_COMMAND
    }
}