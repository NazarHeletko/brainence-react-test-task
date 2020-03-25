import React, {ChangeEvent, useRef, useState} from "react"
import style from './Search.module.css'
import {ItemType} from "../../../../redux/items-reducer";

type PropsType = {
    filterItemsByNameAC: (text: string, basicArrItems: Array<ItemType>)=> void
    itemsDataSimleSelector: Array<ItemType>
}

let Search: React.FC<PropsType> = ({filterItemsByNameAC, itemsDataSimleSelector}) => {
    const originItems = useRef(itemsDataSimleSelector);

    let [curentSearchText, setCurentSearchText] = useState('');
    let setSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        let searchText = e.target.value;
        setCurentSearchText(searchText);
        filterItemsByNameAC(searchText, originItems.current);
    };
    return(
        <div className={style.search}>
            <input placeholder='search by name' onChange={(e)=>{setSearchTextChange(e)}} value={curentSearchText} type="text"/>
        </div>
    )
};

export default Search;