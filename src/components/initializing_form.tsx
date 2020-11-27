import 'semantic-ui-css/semantic.min.css'
import {Orientation} from "../store/asp_location/asp_location"

import { connect, ConnectedProps } from 'react-redux'
import React, {ChangeEvent, FormEvent, useState} from 'react'
import { Button, Form, Dropdown } from 'semantic-ui-react';
import {RootState} from "../store/index"


// import {INITIALIZE_LOCATION} from "../store/asp_location/location_action_types"
// import {INITIALIZE_GRID_DIMENSION} from "../store/grid_dimension/grid_action_type"

// import {locationReducer} from "../store/asp_location/reducers"
// import {gridDimensionReducer} from "../store/grid_dimension/reducers"

import { setGridDimension } from '../store/grid_dimension/actions';
import {initializeLocation} from "../store/asp_location/actions";
import {useHistory} from "react-router-dom"

const options = [
  { key: "N", text: 'North', value: "N" },
  { key: "E", text: 'East', value: "E" },
  { key: "W", text: 'West', value: "W" },
  { key: "S", text: 'South', value: "S" },
]  

const mapState = (state: RootState) => ({
  location: state.location,
  commands: state.command,
  griddimension: state.griddimension
})
const mapDispatch = {
  dispatchLocation: initializeLocation,
  dispatchDimension: setGridDimension,
}
const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const InitializeForm = (props:PropsFromRedux) => {
  const history = useHistory()
  const [bool,setBool] = useState(true)
  const [x,setX] = useState(0)
  const [y,setY] = useState(0)
  const [aspX,setAspX] = useState(0)
  const [aspY,setAspY] = useState(0)
  const [orientation, setOrientation] = useState<Orientation>("N")
  // const [location, setLocation] = useState<Location>()
  // const [gridDimension, setGridDimension] = useState<GridDimension>()
  
//   const [location, dispatchLocation] = useReducer(locationReducer, {"x": 0, "y":0, "orientation": "N"} );
//   const [gridDimension, dispatchDimension] = useReducer(gridDimensionReducer, {"x": 10, "y": 10, "gridlist": undefined});

  const onXChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)
    if(value>=0){
        setX(value);
    }
    else{
        alert("The value should be minimum 0")
    }  
    
  }
  const onYChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)
    if(value>=0){
      setY(parseInt(event.target.value));
    }
    else{
        alert("The value should be minimum 0")
    }
    }

  const onSubmitLocation = (event: FormEvent<HTMLFormElement>) => {
    //   dispatchLocation({type:INITIALIZE_LOCATION, payload:{x: aspX, y: aspY, orientation: orientation}})        
      if(aspX <= x && aspY <= y){
        props.dispatchLocation({x: aspX, y: aspY, orientation: orientation})
        //change route
        history.push("welcome")
      }
      else{
          alert("Please place the Hoover inside the room")
      }
  }
  const onSubmitDimension = (event: FormEvent<HTMLFormElement>) => {
    //   dispatchDimension({type:INITIALIZE_GRID_DIMENSION, payload:{x: x, y: y}})
      props.dispatchDimension({x: x, y: y})
      setBool(false)
  }

  const onAspXChange = (event: ChangeEvent<HTMLInputElement>) => {
      setAspX(parseInt(event.target.value));
  }
  const onAspYChange = (event: ChangeEvent<HTMLInputElement>) => {
      setAspY(parseInt(event.target.value));
  }
  const onAspOChange = (event: React.SyntheticEvent<HTMLElement, Event>) => {
      let value = event.currentTarget.innerText
      let optionValue = options.find(option => option.text === value)
      const orientTester = ["N", "E", "W", "S"]
      const isOrientation = (x: any): x is Orientation => orientTester.includes(x);
      let orientTo = optionValue?.key
      if(isOrientation(orientTo)){
          setOrientation(orientTo);
      }     
  }
      return (
      bool ? (<div>
           <Form onSubmit={onSubmitDimension}>
               <Form.Field>
                   <label>
                       Horizontal Size(X)
                   </label>
                   <input type = "number" onChange = {onXChange} placeholder = "A number describing the horizontal size"/>
               </Form.Field>
               <Form.Field>
                   <label>
                       Vertical Size(Y)
                   </label>
                   <input type = "number" onChange = {onYChange} placeholder = "A number describing the vertical size"/>
               </Form.Field>
               <Button type="submit">Submit</Button>
           </Form>
      </div>) : (<Form onSubmit={onSubmitLocation}>
               <Form.Field>
                   <label>
                       Horizontal Location(X)
                   </label>
                   <input type = "number" onChange = {onAspXChange} placeholder = "A number describing the horizontal location"/>
               </Form.Field>
               <Form.Field>
                   <label>
                       Vertical Location(Y)
                   </label>
                   <input type = "number" onChange = {onAspYChange} placeholder = "A number describing the vertical location"/>
               </Form.Field>
               <Form.Field>
                   <label>
                       Orientation(O)
                   </label>
                   <Dropdown text="Orientation" options={options} simple item onChange={onAspOChange}/>
                   {/* <input type = "text" onChange = {onAspYChange} placeholder = "By Default N"/> */}
               </Form.Field>
               <Button type="submit">Submit</Button>
           </Form>)
  )
}
export default connector(InitializeForm);
// export default InitializeForm