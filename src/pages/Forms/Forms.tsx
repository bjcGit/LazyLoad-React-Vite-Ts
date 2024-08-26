
import FormCard, { FormButtons, FormImage, FormTitle } from "../../components/FormsComponents"
import { products } from '../../data/products'
import '../styles/custom-styles.css'

const product = products[0]

export const Forms = () => {
    return (
        <div>
            <h1>Forms Page</h1>
            <hr />
            <div>
                <FormCard
                    key={product.id}
                    productForm={product}
                    className="bg-dark text-white"
                    initialValues={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {
                        (msg) => (
                            <>
                                <FormImage className="custom-image" />
                                <FormTitle className="text-bold" />
                                <FormButtons className="custom-buttons" />
                                <h1>{msg}</h1>
                            </>
                        )
                    }
                </FormCard>
            </div>
        </div>
    )
}
