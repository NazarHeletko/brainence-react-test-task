import React from "react"
import style from './Taskbar.module.css'
import AddProduct from "./AddProduct/AddProduct";
import Search from "./Search/Search";

type PropsType = {

}

let Taskbar: React.FC<PropsType> = () => {
    return(
        <div className={style.taskbar}>
            <AddProduct/>
            <Search/>
        </div>
    )
};

export default Taskbar;