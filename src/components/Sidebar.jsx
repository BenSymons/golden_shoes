import categories from "../data/categories.json"
import { FaTag } from "react-icons/fa"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <section>
                <div className="label">
                    <p>Search by</p>
                </div>
                <div className="sidebar-content">
                    <label>Keyword</label><br />
                    <input /><br />
                    <label>Category</label><br />
                    <select>
                        <option>-- Select Category --</option>
                    </select><br />
                    <button className="search-button">Search</button>
                </div>
            </section>
            <section>
                <div className="label">
                    <p>Categories</p>
                </div>
                <div className="sidebar-content">
                    {categories.map((category, index) => {
                        return (
                            <div key={`category ${index}`} className="cat">
                                <FaTag />
                                <p>{category}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Sidebar