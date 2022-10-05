import {combineReducers, createStore} from "redux";
import reducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    counterState: reducer
})

const store = createStore(rootReducer, composeWithDevTools());

export default store

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store; // for dev