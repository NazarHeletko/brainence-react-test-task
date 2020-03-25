import React from "react"
import style from './AppWrapper.module.css'
import Taskbar from "./Taskbar/Taskbar";
import ItemsContainer from "./Items/ItemsContainer";

type PropsType = {

}

let AppWrapper: React.FC<PropsType> = () => {
    return(
        <div className={style['app-wrapper']}>
            <Taskbar/>
            <ItemsContainer/>
        </div>
    )
};

export default AppWrapper;