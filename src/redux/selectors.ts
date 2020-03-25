import {AppStateType} from "./redux-store";

export const itemsDataSimleSelector = (state: AppStateType) => {
    return state.items.items;
};