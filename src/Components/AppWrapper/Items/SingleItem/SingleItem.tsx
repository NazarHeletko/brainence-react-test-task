import React from "react"
import style from './SingleItem.module.css'
import deletePng from '../../../assets/delete.png'
import topPng from './../../../assets/up.png'
import pinned from './../../../assets/pushpin.png'

type PropsType = {
    url: string
    name: string
    description: string
    price: number
    id: number
    deleteItemAC: (id: number) => void
    isFirstEl: number
    moveToTopItemAC: (name: string, description: string, img: string, price: number, id: number) => void
    copyMainItemsAC: () => void
}

let SingleItem: React.FC<PropsType> = ({url, name, description, price, id, deleteItemAC, moveToTopItemAC, isFirstEl, copyMainItemsAC}) => {
    return (
        <div className={style['single-item']}>
            <div className={`${style['single-item-wrapper']} ${isFirstEl === 0 ? style['first-item-bg'] : null}`}>
                <img alt='wrong product url' src={url}/>
                <h3>{name}</h3>
                <p>{description}</p>
                <span className={style.price}>{`Price: ${price}$`}</span>
                <div className={style['delete-item']}><img onClick={() => {
                    deleteItemAC(id);
                    copyMainItemsAC();
                }} src={deletePng}/>
                </div>
                {
                    isFirstEl === 0 ? <div className={style.pined}><img src={pinned}/></div> :
                        <div className={style['move-to-top']}>
                            <img
                                onClick={() => {
                                    moveToTopItemAC(name, description, url, price, id);
                                    copyMainItemsAC();
                                }}
                                src={topPng}/>
                        </div>
                }
            </div>
        </div>
    )
};

export default SingleItem