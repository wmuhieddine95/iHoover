import 'semantic-ui-css/semantic.min.css'
import {initializeLocation} from "./store/asp_location/actions";
import WelcomePage from "./components/welcome_page"
import InitializeForm from "./components/initializing_form"
import { connect, ConnectedProps } from 'react-redux'
import React from 'react'
import {RootState} from "./store/index"

// import {locationReducer} from "./store/asp_location/reducers"
// import {gridDimensionReducer} from "./store/grid_dimension/reducers"
// import { gridDimensionReducer } from '../store/grid_dimension/reducers';

import { setGridDimension } from './store/grid_dimension/actions';

import {useHistory, Switch, Link, Route} from "react-router-dom"

// interface State {
//   store: {
//   location : Location,
//   commands: AspCommandState,
//   griddimensions: GridDimension
//   }
// }

// const initialState : State = {
//   store: {
//   location : {x: 0, y:0, orientation: "N"}, 
//   commands: {commands: []},
//   griddimensions: {x: 10, y: 10, gridlist: []}
//   }
// };

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
const connector = connect(mapState)
type PropsFromRedux = ConnectedProps<typeof connector>

const App = (props: PropsFromRedux) => {
  const history = useHistory()
      return (
        <Switch>
          <Route exact path="/">
            <InitializeForm/>
          </Route>
          <Route exact path="/welcome">
            <WelcomePage/>
          </Route>
        </Switch>
        
  )
}
// export default connector(App);
export default connector(App)