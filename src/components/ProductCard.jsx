const ProductCard = ({ product }) => {
    console.log(product, "product")
    const { image, name, price, category, gender } = product
    return (
        <div className="product-card">
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