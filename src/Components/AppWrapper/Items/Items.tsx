import React, {useEffect} from "react"
import style from './Items.module.css'
import {ItemType} from "../../../redux/items-reducer";
import SingleItem from "./SingleItem/SingleItem";

type PropsType = {
    itemsDataCopyFilter: Array<ItemType>
    deleteItemAC: (id: number) => void
    moveToTopItemAC: (name: string, description: string, img: string, price: number, id: number) => void
    copyMainItemsAC: () => void
}

let Items: React.FC<PropsType> = ({itemsDataCopyFilter, deleteItemAC, moveToTopItemAC, copyMainItemsAC}) => {
    useEffect(() => {
        copyMainItemsAC();
    }, []);
    return (
        <div className={style.items}>
            {itemsDataCopyFilter.map((el, index) => <SingleItem isFirstEl={index} moveToTopItemAC={moveToTopItemAC}
                                                                deleteItemAC={deleteItemAC} key={el.id} url={el.img}
                                                                id={el.id} name={el.name} description={el.description}
                                                                price={el.price} copyMainItemsAC={copyMainItemsAC}/>)}
        </div>
    )
};

export default Items;