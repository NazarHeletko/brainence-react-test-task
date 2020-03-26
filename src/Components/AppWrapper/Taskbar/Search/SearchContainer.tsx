import {connect} from 'react-redux';
import {AppStateType} from "../../../../redux/redux-store";
import Search from "./Search";
import {copyMainItemsAC, filterItemsByNameAC, ItemType} from "../../../../redux/items-reducer";
import {itemsDataSimleSelector} from "../../../../redux/selectors";



type mapStateToPropsType = {
    itemsDataPresent: Array<ItemType>
}

type mapDispatchToPropsType = {
    filterItemsByNameAC: (text: string, basicArrItems: Array<ItemType>) => void
    copyMainItemsAC: ()=> void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return{
        itemsDataPresent: itemsDataSimleSelector(state)
    }
};

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {filterItemsByNameAC, copyMainItemsAC})(Search)