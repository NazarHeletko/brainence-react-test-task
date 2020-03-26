import React, {ChangeEvent, useEffect, useRef, useState} from "react"
import style from './Search.module.css'
import {ItemType} from "../../../../redux/items-reducer";

type PropsType = {
    filterItemsByNameAC: (text: string, basicArrItems: Array<ItemType>)=> void
    itemsDataPresent: Array<ItemType>
    copyMainItemsAC: ()=> void
}

let Search: React.FC<PropsType> = ({filterItemsByNameAC, itemsDataPresent, copyMainItemsAC}) => {

    let [curentSearchText, setCurentSearchText] = useState('');
    let setSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        let searchText = e.target.value;
        setCurentSearchText(searchText);
        filterItemsByNameAC(searchText, itemsDataPresent);
    };
    return(
        <div className={style.search}>
            <input placeholder='search by name' onChange={(e)=>{
                copyMainItemsAC();
                setSearchTextChange(e);
            }} value={curentSearchText} type="text"/>
        </div>
    )
};

export default Search;