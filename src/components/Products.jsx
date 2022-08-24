import PageContainer from "./PageContainer"
import products from "../data/products.json"
import ProductCard from "./ProductCard"

const ProductsPage = () => {
    console.log(products)
    return (
        <PageContainer>
            <div className="products-container">
                {products.map((product, index) => {
                    return <ProductCard product={product} key={`product ${index}`} />
                })}
            </div>
        </PageContainer>
    )
}

export default ProductsPage