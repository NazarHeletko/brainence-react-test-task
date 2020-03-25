import {AppStateType} from "./redux-store";

export const itemsDataSimleSelector = (state: AppStateType) => {
    return state.items.items;
};

export const editModeSimleSelector = (state: AppStateType) => {
    return state.items.editMode;
};

export const getItemsCountSimpleSelector = (state: AppStateType) => {
    return state.items.items.length;
};