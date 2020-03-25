import React from "react"
import style from './AddProduct.module.css'
import plusImg from '../../../assets/plus.png'

type PropsType = {
    closeOpenTogleAddItemMenuAC: (close: boolean) => void
}

let AddProduct: React.FC<PropsType> = ({closeOpenTogleAddItemMenuAC}) => {
    return(
        <div onClick={()=>{closeOpenTogleAddItemMenuAC(true)}} className={style['add-product']}>
            <img src={plusImg} alt="add product"/>
            <span>add product</span>
        </div>
    )
};

export default AddProduct;