import React from "react"
import style from './Taskbar.module.css'
import Search from "./Search/Search";
import AddProductContainer from "./AddProduct/AddProductContainer";

type PropsType = {

}

let Taskbar: React.FC<PropsType> = () => {
    return(
        <div className={style.taskbar}>
            <AddProductContainer/>
            <Search/>
        </div>
    )
};

export default Taskbar;