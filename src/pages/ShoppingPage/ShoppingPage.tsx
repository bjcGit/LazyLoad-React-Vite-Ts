import { ProductButtons, ProductImg, ProductTitle } from "../../components"
import { ProductCard} from "../../components/ProductCard"

const product = {
  id: '1',
  title: 'Coffee'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shooping Page</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        <ProductCard product={product} >
          <ProductCard.Image/>
          <ProductCard.Title title={product.title}/>
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} >
          <ProductImg/>
          <ProductTitle title={'Hola'}/>
          <ProductButtons />
        </ProductCard>
    
      </div>
    </div>
  )
}
export default ShoppingPage
