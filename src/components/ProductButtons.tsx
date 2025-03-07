import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../pages/styles/styles.module.css'

export interface Props {
    className?: string
}

export const ProductButtons = ({className}: Props) => {

    const { increaseBy, counter } = useContext( ProductContext )

    return (
        <div className={`${styles.buttonsContainer} ${className}`}>
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            > - </button>
            <div className={styles.countLabel}> {counter} </div>

            <button
                className={styles.buttonAdd}
                onClick={() => increaseBy(+1)}
            > + </button>
        </div>
    )
}