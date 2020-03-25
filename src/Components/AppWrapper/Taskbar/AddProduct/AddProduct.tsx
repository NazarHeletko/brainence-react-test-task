import React from "react"
import style from './AddProduct.module.css'

type PropsType = {

}

let AddProduct: React.FC<PropsType> = () => {
    return(
        <div className={style['add-product']}>
            add product
        </div>
    )
};

export default AddProduct;