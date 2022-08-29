import { IoCartSharp } from "react-icons/io5"
import { FiMenu } from "react-icons/fi"

const BurgerButton = ({ setMenu, width }) => {
    return (
        <div className="header-buttons">
            <div
                className="burger-button"
                onClick={() => setMenu((prev) => !prev)}
            >
                <FiMenu />
            </div>
            <div className={width > 500 && "cart-button"}>
                <div className="flex-valign">
                    <IoCartSharp fontSize="30px" />
                </div>
                {width > 500 && (<div>
                    <p>Shoes: 1</p>
                    <p>Cost: £65.99</p>
                </div>)}
            </div>
        </div>
    )
}

export default BurgerButton