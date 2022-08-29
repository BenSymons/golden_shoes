import { IoCartSharp } from "react-icons/io5"
import { FiMenu } from "react-icons/fi"

const BurgerButton = ({ setMenu }) => {
    return (
        <div className="header-buttons">
            <div
                className="burger-button"
                onClick={() => setMenu((prev) => !prev)}
            >
                <FiMenu />
            </div>
            <div className="cart-button">
                <div className="flex-valign">
                    <IoCartSharp fontSize="30px" />
                    <p>Your Shopping Cart</p>
                </div>
                <div className="flex-valign">
                    <p>Shoes: 1</p>
                    <p>Cost: £65.99</p>
                </div>
            </div>
        </div>
    )
}

export default BurgerButton