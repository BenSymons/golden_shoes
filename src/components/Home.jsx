import PageContainer from "./PageContainer"
import products from "../data/products.json"
import ProductCard from "./ProductCard"

const Home = () => {
    const otherProducts = products.filter((product, index) => index >= 1)
    return (
        <PageContainer>
            <img className="featured" src={products[0].image} />
            <div className="products-container">
                {otherProducts.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
        </PageContainer>
    )
}

export default Home