import {connect} from 'react-redux';
import {AppStateType} from "../../../redux/redux-store";
import AddProductWindow from "./AddProductWindow";
import {addProductMenuAC, closeOpenTogleAddItemMenuAC, ItemType} from "../../../redux/items-reducer";
import {getItemsCountSimpleSelector} from "../../../redux/selectors";


type mapStateToPropsType = {
    getItemsCount: number
}

type mapDispatchToPropsType = {
    closeOpenTogleAddItemMenuAC: (close: boolean) => void
    addProductMenuAC: (item: ItemType) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        getItemsCount: getItemsCountSimpleSelector(state)
    }
};

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    closeOpenTogleAddItemMenuAC,
    addProductMenuAC
})(AddProductWindow)