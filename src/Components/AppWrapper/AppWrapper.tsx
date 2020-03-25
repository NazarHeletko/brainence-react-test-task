import React from "react"
import style from './AppWrapper.module.css'
import Taskbar from "./Taskbar/Taskbar";
import ItemsContainer from "./Items/ItemsContainer";
import AddProductWindowContainer from "./AddProductWindow/AddProductWindowContainer";


type PropsType = {
    editMode: boolean
}

let AppWrapper: React.FC<PropsType> = ({editMode}) => {
    return(
        <div className={style['app-wrapper']}>
            <Taskbar/>
            <ItemsContainer/>
            {editMode ? <AddProductWindowContainer/> : null}
        </div>
    )
};

export default AppWrapper;