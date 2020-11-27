// import 'semantic-ui-css/semantic.min.css'
import {RootState} from "../store/index"
import React, { useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import {Dropdown, Button, Divider, List, ListIcon, ListItem, ListContent, Container, Grid, GridColumn} from "semantic-ui-react"
import {addCommand, executeCommand} from "../store/asp_command/actions";
import {orientToLeft, oneSquareForward, orientToRight} from "../store/asp_location/actions";
import {updateGrids} from "../store/grid_dimension/actions";
import {AspCommand} from "../store/asp_command/asp_commands"

// interface CommandProps{
//     commandList?: AspCommand,
//     addCommand?: Function
//     executeCommand?: Function
// }

const options = [
    { key: "A", text: 'Forward', value: "A" },
    { key: "G", text: 'Orient To Left', value: "G" },
    { key: "D", text: 'Orient To Right', value: "D" },
  ]  

  const mapState = (state: RootState) => ({
    location: state.location,
    commands: state.command,
    griddimension: state.griddimension
  })
  const mapDispatch = {
    dispatchAddCommand: addCommand,
    dispatchExecuteCommand: executeCommand,
    dispatchA: oneSquareForward,
    dispatchD: orientToRight,
    dispatchG: orientToLeft,
    dispatchUpdateGrids: updateGrids
  }
  const connector = connect(mapState, mapDispatch)
  type PropsFromRedux = ConnectedProps<typeof connector>

const CommandsForm: React.FC<PropsFromRedux>=(props) => {
    const [command, setCommand] = useState<AspCommand|undefined>()
    const commandChange = (event: React.SyntheticEvent<HTMLElement, Event>) => {
        let value = event.currentTarget.innerText
        let optionValue = options.find(option => option.text === value)
        const commandTester = ["D", "G", "A"]
        const isCommand = (x: any): x is AspCommand => commandTester.includes(x);
        let commandToAdd = optionValue?.key
        if(isCommand(commandToAdd)){
            setCommand(commandToAdd);
        }     
    }
    const onAddCommand = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(command!==undefined){
            props.dispatchAddCommand(command)
        }
    }
    const onExecuteCommand = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(command!==undefined){
            const toExecute = props.commands.commands[0]
            props.dispatchExecuteCommand(props.griddimension)
            switch(toExecute){
            case "D":
                props.dispatchD()
                break;
            case "G":
                props.dispatchG()
                break;
            case "A":
                props.dispatchUpdateGrids({x: props.location.x, y: props.location.y})
                props.dispatchA(props.griddimension)
        }
        }
    }
        return(
            <div>
                <Container textAlign="center">
                    <label>Command Events:</label>
                    <Dropdown text="Commands" options={options} simple item onChange={commandChange}/>
                    <Button onClick={onAddCommand}>Add</Button>
                    <Button onClick={onExecuteCommand}>Execute</Button>
                </Container>
                <Divider/>
                <Container>
                <Grid>
                    <GridColumn width="2">
                    <List>
                {props.commands.commands.map((command, ind)=>{return(
                // <li>{command}</li>
                    <ListItem key={ind}>
                        {(command==="D") ? (<ListIcon name="arrow right"></ListIcon>) 
                        :((command==="G") ? (<ListIcon name="arrow left"></ListIcon>)
                        :(<ListIcon name="arrow up"></ListIcon>))
                        }
                    <ListContent>{command}</ListContent>
                    </ListItem>
                )}
                )}
                 </List>
                    </GridColumn>
                </Grid>
                <Grid>
                    <Grid.Column>
                    <div>{props.location.x}</div>
                    </Grid.Column>
                    <Grid.Column>
                    <div>{props.location.y}</div>
                    </Grid.Column>
                    <Grid.Column>
                    <div>{props.location.orientation}</div>
                    </Grid.Column>
                </Grid>
                </Container>
                 </div>            
        );
    }

export default connector(CommandsForm)