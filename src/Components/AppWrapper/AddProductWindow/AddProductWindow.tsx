import React, {ChangeEvent, useState} from "react"
import style from './AddProductWindow.module.css'
import closeAddItemImg from '../../assets/close-add-items.png'
import {addProductMenuAC, ItemType} from "../../../redux/items-reducer";


type PropsType = {
    closeOpenTogleAddItemMenuAC: (close: boolean) => void
    addProductMenuAC: (item: ItemType) => void
    getItemsCount: number
    copyMainItemsAC: () => void
}

let AddProductWindow: React.FC<PropsType> = ({closeOpenTogleAddItemMenuAC, getItemsCount, addProductMenuAC, copyMainItemsAC}) => {

    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [price, setPrice] = useState<number | string>('');
    let [urlImage, setUrlImage] = useState('');
    let [errorPrice, setErrorPrice] = useState('');

    let addNewProduct = () => {
        let newItem = {
            name: title,
            description: description,
            img: urlImage,
            price: price,
            id: getItemsCount
        } as ItemType
        if (String(newItem.price).length < 1) {
            setErrorPrice('All fields must be filled');
        } else {
            addProductMenuAC(newItem);
            copyMainItemsAC();
            closeOpenTogleAddItemMenuAC(false);
        }
    };

    let onChangeInput = (e: ChangeEvent<HTMLInputElement>, inputType: string) => {
        if (inputType === 'title') {
            setTitle(e.target.value)
        } else if (inputType === 'description') {
            setDescription(e.target.value)
        } else if (inputType === 'price') {
            setPrice(e.target.value)
        } else if (inputType === 'urlImage') {
            setUrlImage(e.target.value)
        }
    };

    return (
        <div className={style['add-product-window']}>
            <span className={style['error-price']}>{errorPrice}</span>
            <h5>Title:</h5>
            <input onChange={(e) => {
                onChangeInput(e, 'title')
            }} value={title} type="text"/>
            <h5>Description:</h5>
            <input onChange={(e) => {
                onChangeInput(e, 'description')
            }} value={description} type="text"/>
            <h5>Price:</h5>
            <input onChange={(e) => {
                onChangeInput(e, 'price')
            }} value={price} type="number"/>
            <h5>Product image url</h5>
            <input onChange={(e) => {
                onChangeInput(e, 'urlImage')
            }} value={urlImage} type="text"/>
            <div className={style['close-btn']}>
                <img onClick={() => {
                    closeOpenTogleAddItemMenuAC(false)
                }} src={closeAddItemImg} alt="close menu"/>
            </div>
            <button onClick={() => {
                addNewProduct();
            }} className={style['post-item']}>add
            </button>
        </div>
    )
};

export default AddProductWindow