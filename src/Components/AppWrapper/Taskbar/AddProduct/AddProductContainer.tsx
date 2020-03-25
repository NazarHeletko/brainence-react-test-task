import {connect} from 'react-redux';
import AddProduct from "./AddProduct";
import {AppStateType} from "../../../../redux/redux-store";
import {closeOpenTogleAddItemMenuAC} from "../../../../redux/items-reducer";



type mapStateToPropsType = {

}

type mapDispatchToPropsType = {
    closeOpenTogleAddItemMenuAC: (close: boolean) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return{

    }
};

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {closeOpenTogleAddItemMenuAC})(AddProduct)