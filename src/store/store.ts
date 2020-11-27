import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {RootState, rootReducer} from "./index";
import logger from "redux-logger";
import {AspCommand, AspCommandState} from "./asp_command/asp_commands"
import {Location} from "./asp_location/asp_location"
import {GridDimension} from "./grid_dimension/grid_dimension"

interface State {
    location : Location,
    commands: AspCommandState,
    griddimensions: GridDimension
}

const initialState : State = {
    location : {x: 0, y:0, orientation: "N"}, 
    commands: {commands: []},
    griddimensions: {x: 10, y: 10, gridlist: []}
};

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
