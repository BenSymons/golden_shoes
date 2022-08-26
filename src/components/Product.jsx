import PageContainer from "./PageContainer"
import products from "../data/products.json"
import { useParams } from "react-router-dom"
import Returns from "../components/Returns"

const ProductPage = () => {
    const params = useParams()
    const thisProduct = products.find(product => product.id == params.productId)
    console.log(thisProduct, "<-- thisProduct")
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
                        <p className="price">{stock === 0 ? "OUT OF STOCK" : price}</p>
                    </div>
                </div>
                <Returns />
                <button
                    className="buy-now"
                    disabled={stock === 0}
                >Buy now!</button>
            </div>
        </PageContainer>
    )
}

export default ProductPage