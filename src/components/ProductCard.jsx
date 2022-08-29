import { useNavigate } from "react-router-dom"

const ProductCard = ({ product }) => {
    const navigate = useNavigate()
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
                    <p className="price">{stock === 0 ? "OUT OF STOCK" : price}</p>
                    {stock <= 3 && stock !== 0 && `only ${stock} left in stock`}
                </div>
            </div>
        </div>
    )
}

export default ProductCard