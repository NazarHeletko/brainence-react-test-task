import {AppStateType} from "./redux-store";

export const itemsDataSimleSelector = (state: AppStateType) => {
    return state.items.items;
};

export const itemsDataCopyFilterSimleSelector = (state: AppStateType) => {
    return state.items.filteredItems;
};

export const editModeSimleSelector = (state: AppStateType) => {
    return state.items.editMode;
};

export const getItemsCountSimpleSelector = (state: AppStateType) => {
    return state.items.items.length;
};