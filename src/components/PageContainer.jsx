import { IoCartSharp } from "react-icons/io5"
import { FaPhone, FaPlane, FaGift } from "react-icons/fa"
import { FiChevronsRight } from "react-icons/fi"

const PageContainer = ({ children }) => {
    return (
        <div>
            <section className="header">
                <div className="logo-box">
                    <p>Golden Shoe</p>
                </div>
                <nav className="header-buttons">
                    <div><p>Home</p></div>
                    <div><p>Products</p></div>
                    <div><p>My Account</p></div>
                    <div><p>About</p></div>
                    <div><p>Contact</p></div>
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
                </nav>
            </section>
            {children}
            <section className="learn-more-banner">
                <div>
                    <div className="flex">
                        <FaPlane fontSize="36px" />
                        <p>SHIPPING</p>
                    </div>
                    <p>Items are shipped every Tuesday at 3pm. The estimated time for delivery is 1 week.
                        If you have not received your product in two weeks, call 07123456789.
                    </p>
                    <div className="flex">
                        <FiChevronsRight />
                        <a>Learn More</a>
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <FaPhone fontSize="36px" />
                        <p>CONTACT US (8-4)</p>
                    </div>
                    <p>For more information call one of the following (9-5 - Monday to Friday):</p>
                    <ul>
                        <li>Womens products: 0797163641</li>
                        <li>Mens products: 0797163641</li>
                        <li>All other concerns: 0797163641</li>
                    </ul>
                    <div className="flex">
                        <FiChevronsRight />
                        <a>Learn More</a>
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <FaGift fontSize="36px" />
                        <p>GIFT WRAPPING</p>
                    </div>
                    <p>Gift wrapping available at checkout</p>
                    <div className="flex">
                        <FiChevronsRight />
                        <a>Learn More</a>
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <IoCartSharp fontSize="36px" />
                        <p>SHOPPING CART</p>
                    </div>
                    <p>Our shopping cart will store your shoes. If you choose not to purchase these at the moment.
                        To learn more about the shopping cart process, click learn more below
                    </p>
                    <div className="flex">
                        <FiChevronsRight />
                        <a>Learn More</a>
                    </div>
                </div>
            </section>
            <section className="footer">
                <p>Home</p>
                <p>Support</p>
                <p>My Account</p>
                <p>The Store</p>
                <p>Contact</p>
            </section>
        </div>
    )
}

export default PageContainer