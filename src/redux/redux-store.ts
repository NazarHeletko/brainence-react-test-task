import {combineReducers, createStore} from "redux";
import itemsReducer from "./items-reducer";


let rootReducer = combineReducers({
    items: itemsReducer
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(rootReducer);

// @ts-ignore
window.store = store;

export default store;