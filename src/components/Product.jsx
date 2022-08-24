import PageContainer from "./PageContainer"
import products from "../data/products.json"
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard"

const ProductPage = () => {
    const params = useParams()
    const thisProduct = products[params.productId]
    const { name, image, price, category } = thisProduct
    return (
        <PageContainer>
            <div className="display">
                <div>
                    <img src={image} />
                    <div>
                        <div className="product-cat">
                            <div><p>{category}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

export default ProductPage