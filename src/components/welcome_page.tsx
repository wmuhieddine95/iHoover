import 'semantic-ui-css/semantic.min.css'
import React, {ChangeEvent, FormEvent, useState, ReactNode} from 'react'
import {RootState} from "../store/index"
import { connect, ConnectedProps } from 'react-redux'

import { updateGrids } from '../store/grid_dimension/actions';
import {orientToLeft, orientToRight, oneSquareForward} from "../store/asp_location/actions";
import {addCommand, executeCommand} from "../store/asp_command/actions";
import {AspCommand, AspCommandState} from "../store/asp_command/asp_commands"
import CommandsForm from './commands_form';

const mapState = (state: RootState) => ({
    location: state.location,
    commands: state.command,
    griddimension: state.griddimension
  })
  const mapDispatch = {
    dispatchAddCommand: addCommand,
    dispatchExecuteCommand: executeCommand,
    dispatchOrientLeft: orientToLeft,
    dispatchOrientRight: orientToRight,
    dispatchForward: oneSquareForward
  }
  const connector = connect(mapState, mapDispatch)
  type PropsFromRedux = ConnectedProps<typeof connector>

const WelcomePage = (props:PropsFromRedux) => {    
        return( 
            <div>
                <CommandsForm/>            
            </div>
        );
}
export default connector(WelcomePage)