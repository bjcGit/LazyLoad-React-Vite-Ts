import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../pages/styles/styles.module.css'
import noImg from '../pages/assets/no-image.jpg'

export const ProductImg = ({ img = '' }) => {

    const { product } = useContext( ProductContext )
    let imgShow: string;

    if ( img ) {
        imgShow = img
    } else if ( product.img ) {
        imgShow = product.img
    } else {
        imgShow = noImg
    }

    return (
        <img className={styles.productImg} src={imgShow} alt="Coffe" />
    )
}