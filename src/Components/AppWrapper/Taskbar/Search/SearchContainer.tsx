import {connect} from 'react-redux';
import {AppStateType} from "../../../../redux/redux-store";
import Search from "./Search";
import {filterItemsByNameAC, ItemType} from "../../../../redux/items-reducer";
import {itemsDataSimleSelector} from "../../../../redux/selectors";



type mapStateToPropsType = {
    itemsDataSimleSelector: Array<ItemType>
}

type mapDispatchToPropsType = {
    filterItemsByNameAC: (text: string, basicArrItems: Array<ItemType>) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return{
        itemsDataSimleSelector: itemsDataSimleSelector(state)
    }
};

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {filterItemsByNameAC})(Search)