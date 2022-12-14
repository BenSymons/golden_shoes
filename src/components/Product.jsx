import PageContainer from "./PageContainer"
import products from "../data/products.json"
import { useParams } from "react-router-dom"
import Returns from "../components/Returns"

const ProductPage = () => {
    const params = useParams()
    const thisProduct = products.find(product => product.id == params.productId)
    const { name, image, price, category, gender, stock } = thisProduct
    return (
        <PageContainer>
            <div className="product-container">
                <div className="display-card">
                    <img src={image} />
                    <div className="display-box">
                        <div className="product-cat">
                            <div><p>{category}</p></div>
                        </div>
                        <h3>{gender}</h3>
                        <p>{name}</p>
                        <p className="price">{price}</p>
                    </div>
                </div>
                <button
                    className="buy-now"
                >Buy now!</button>
            </div>
        </PageContainer>
    )
}

export default ProductPage