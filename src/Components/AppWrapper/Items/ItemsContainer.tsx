import {connect} from 'react-redux';
import Items from "./Items";
import {AppStateType} from "../../../redux/redux-store";
import {itemsDataCopyFilterSimleSelector} from "../../../redux/selectors";
import {copyMainItemsAC, deleteItemAC, ItemType, moveToTopItemAC} from "../../../redux/items-reducer";

type mapStateToPropsType = {
    itemsDataCopyFilter: Array<ItemType>
}

type mapDispatchToPropsType = {
    deleteItemAC: (id: number) => void
    moveToTopItemAC: (name: string, description: string, img: string, price: number, id: number) => void
    copyMainItemsAC: () => void
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        itemsDataCopyFilter: itemsDataCopyFilterSimleSelector(state)
    }
};

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    deleteItemAC,
    moveToTopItemAC,
    copyMainItemsAC
})(Items)