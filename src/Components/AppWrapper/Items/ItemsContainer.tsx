import {connect} from 'react-redux';
import Items from "./Items";
import {AppStateType} from "../../../redux/redux-store";
import {itemsDataSimleSelector} from "../../../redux/selectors";
import {deleteItemAC, ItemType, moveToTopItemAC} from "../../../redux/items-reducer";

type mapStateToPropsType = {
    itemsData: Array<ItemType>
}

type mapDispatchToPropsType = {
    deleteItemAC: (id: number)=> void
    moveToTopItemAC: (name: string, description: string, img: string, price: number, id: number)=> void
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return{
        itemsData: itemsDataSimleSelector(state)
    }
};

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {deleteItemAC, moveToTopItemAC})(Items)