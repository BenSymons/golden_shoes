import { useNavigate } from "react-router-dom"

const BurgerMenu = () => {
    const navigate = useNavigate()
    return (
        <div className="burger-menu">
            <div onClick={() => navigate("/")}>
                <p>Home</p>
            </div>
            <div onClick={() => navigate("/products")}>
                <p>Products</p>
            </div>
            <div>
                <p>My Account</p>
            </div>
            <div>
                <p>About</p>
            </div>
            <div onClick={() => navigate("/faqs")}>
                <p>FAQs</p>
            </div>
            <div>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default BurgerMenu