import React from "react"
import style from './Items.module.css'
import {ItemType} from "../../../redux/items-reducer";
import SingleItem from "./SingleItem/SingleItem";

type PropsType = {
    itemsData: Array<ItemType>
    deleteItemAC: (id: number) => void
    moveToTopItemAC: (name: string, description: string, img: string, price: number, id: number) => void
}

let Items: React.FC<PropsType> = ({itemsData, deleteItemAC, moveToTopItemAC}) => {
    return(
        <div className={style.items}>
            {itemsData.map((el, index)=> <SingleItem isFirstEl={index} moveToTopItemAC={moveToTopItemAC} deleteItemAC={deleteItemAC} key={el.id} url={el.img} id={el.id} name={el.name} description={el.description} price={el.price} />)}
        </div>
    )
};

export default Items;