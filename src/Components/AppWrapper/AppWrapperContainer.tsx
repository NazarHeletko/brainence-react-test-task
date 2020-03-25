import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import AppWrapper from "./AppWrapper";
import {editModeSimleSelector} from "../../redux/selectors";


type mapStateToPropsType = {
    editMode: boolean
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return{
        editMode: editModeSimleSelector(state)
    }
};

export default connect<mapStateToPropsType, {}, {}, AppStateType>(mapStateToProps, {})(AppWrapper)