import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct'
import styles from '../pages/styles/styles.module.css'

import { ProductContextsProps, Props } from '../interfaces/interfaces';
import { ProductImg, ProductTitle, ProductButtons } from './';


export const ProductContext = createContext({} as ProductContextsProps)
const { Provider } = ProductContext

export const ProductCard = ({ children, product }: Props) => {

    const { counter, increaseBy } = useProduct()
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>

            <div className={styles.productCard}>
                {children}
                {/* <ProductImg/>

            <ProductTitle title={product.title} />

            <ProductButtons 
                increaseBy={increaseBy}
                counter={ counter }
            /> */}

            </div>
        </Provider>
    )
}

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImg
ProductCard.Buttons = ProductButtons
