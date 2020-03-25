import React from "react"
import style from './Taskbar.module.css'
import AddProductContainer from "./AddProduct/AddProductContainer";
import SearchContainer from "./Search/SearchContainer";

type PropsType = {

}

let Taskbar: React.FC<PropsType> = () => {
    return(
        <div className={style.taskbar}>
            <AddProductContainer/>
            <SearchContainer/>
        </div>
    )
};

export default Taskbar;