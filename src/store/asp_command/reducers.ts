import {
    AspCommandState
  } from './asp_commands'
  import {
    EXECUTE_COMMAND,
    ADD_COMMAND,
    CommandActionTypes
  } from './command_action_types'
  // import {} from "../asp_location/"

  const initialState: AspCommandState = {
    commands: []
  }
  
  export function commandReducer(
    state = initialState,
    action: CommandActionTypes
  ): AspCommandState {
    switch (action.type) {
      case ADD_COMMAND:
        return {
          commands: [...state.commands, action.payload]
        }
      case EXECUTE_COMMAND:
        const toExecute = state.commands[0]
        return {
          commands: [...state.commands.filter((command, index) => {
            index > 0 
          })
        ]
        }
      default:
        return state
      }
  }