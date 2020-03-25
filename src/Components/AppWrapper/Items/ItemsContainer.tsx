import {connect} from 'react-redux';
import Items from "./Items";
import {AppStateType} from "../../../redux/redux-store";
import {itemsDataSimleSelector} from "../../../redux/selectors";
import {deleteItemAC, ItemType, moveToTopItemAC} from "../../../redux/items-reducer";

type mapStateToProps = {
    itemsData: Array<ItemType>
}

let mapStateToProps = (state: AppStateType): mapStateToProps => {
    return{
        itemsData: itemsDataSimleSelector(state)
    }
};

export default connect(mapStateToProps, {deleteItemAC, moveToTopItemAC})(Items)