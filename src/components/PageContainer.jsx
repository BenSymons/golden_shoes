import { IoCartSharp } from "react-icons/io5"
import { FaPhone, FaPlane, FaGift, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"
import { FiChevronsRight } from "react-icons/fi"
import Sidebar from "./Sidebar"
import { useNavigate, useLocation } from "react-router-dom"
import BurgerButton from "./BurgerButton"
import useWidth from "../utils/useWidth"
import { useState } from "react"
import BurgerMenu from "./BurgerMenu"

const PageContainer = ({ children }) => {
    const [menu, setMenu] = useState(false)
    const width = useWidth()
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location
    console.log(width)
    console.log(width > 1000)

    const handleNavigate = (url) => navigate(url)

    return (
        <div className="page-container">
            <section className="header">
                <div className="logo-box">
                    <p>Golden Shoe</p>
                </div>
                {width < 1000 ? <BurgerButton setMenu={setMenu} width={width} /> : (
                    <nav className="header-buttons">
                        <div
                            onClick={() => handleNavigate("/")}
                            className={pathname === "/" && "selected"}
                        ><p>Home</p></div>
                        <div
                            onClick={() => handleNavigate("/products")}
                            className={/product/.test(pathname) && "selected"}
                        ><p>Products</p></div>
                        <div><p>My Account</p></div>
                        <div><p>About</p></div>
                        <div
                            onClick={() => handleNavigate("/faqs")}
                            className={/faqs/.test(pathname) && "selected"}
                        ><p>FAQs</p></div>
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
                )}
            </section>
            {menu && <BurgerMenu />}
            <div className="main-section">
                <Sidebar />
                <div className="page-content">
                    {children}
                </div>
            </div>
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
                <FaTwitter fontSize="36px" />
                <FaFacebook fontSize="36px" />
                <FaInstagram fontSize="36px" />
            </section>
        </div>
    )
}

export default PageContainer