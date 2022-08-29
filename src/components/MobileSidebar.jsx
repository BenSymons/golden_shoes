import categories from "../data/categories.json"
import { FaTag } from "react-icons/fa"
import { useState } from "react"

const MobileSidebar = () => {
    const [displays, setDisplays] = useState({ "search": false, "categories": false })
    return (
        <div className="sidebar">
            <section>
                <div
                    className="label"
                    onClick={() => setDisplays((prev) => ({ ...prev, search: !prev.search }))}
                >
                    <p>Searchhhhh by</p>
                </div>
                {displays.search && <div className="sidebar-content">
                    <label>Keyword</label><br />
                    <input /><br />
                    <label>Category</label><br />
                    <select>
                        <option>-- Select Category --</option>
                    </select><br />
                    <button className="search-button">Search</button>
                </div>}
            </section>
            <section>
                <div
                    className="label"
                    onClick={() => setDisplays((prev) => ({ ...prev, categories: !prev.categories }))}
                >
                    <p>Categories</p>
                </div>
                {displays.categories && <div className="sidebar-content">
                    {categories.map((category, index) => {
                        return (
                            <div key={`category ${index}`} className="cat">
                                <FaTag />
                                <p>{category}</p>
                            </div>
                        )
                    })}
                </div>}
            </section>
        </div>
    )
}

export default MobileSidebar