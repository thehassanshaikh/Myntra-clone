import { useContext } from "react"
import { ApiDataContext } from "../../App"
import "./Sidebar.css"
export const Sidebar = () => {
    return(
        <aside className="sidebar-container">
            <div className="filter-holder">
                {/* Brands category */}
                <div className="brands">
                    <h3 className="sidebar-lable">Filter</h3>
                    <ul>
                        <li className="category-items"><input type="checkbox"  />All</li>
                        <li className="category-items"><input type="checkbox" />Mens</li>
                        <li className="category-items"><input type="checkbox" />Womens</li>
                        <li className="category-items"><input type="checkbox" />Jewellry</li>
                        <li className="category-items"><input type="checkbox" />Electronics</li>
                    </ul>   
                </div>
            </div>
        </aside>
    )
}