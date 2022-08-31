import { useNavigate } from "react-router-dom"

const ProductCard = ({ product }) => {
    const navigate = useNavigate()
    console.log(product, "product")
    const { id, image, name, price, category, gender, stock } = product
    return (
        <div
            className="product-card"
            onClick={() => navigate(`/product/${id}`)}
        >
            <img src={image} />
            <div className="info-box">
                <div className="product-cat">
                    <p>{category}</p>
                </div>
                <div className="details">
                    <h3>{gender}</h3>
                    <p>{name}</p>
                    <p className="price">{price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard