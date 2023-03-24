import { useContext } from "react"
import { ApiDataContext } from "../../App"

import "./Sidebar.css"
export const Sidebar = () => {
    const data = useContext(ApiDataContext);
    console.log(data)
    return(
        <aside className="sidebar-container">
            <div className="filter-holder">
                {/* Brands category */}
                <div className="brands">
                    <h3 className="sidebar-lable">Brands</h3>
                    <ul>
                        <li className="category-items"><input type="checkbox" />Roadstar</li>
                        <li className="category-items"><input type="checkbox" />Wrong</li>
                        <li className="category-items"><input type="checkbox" />Nike</li>
                        <li className="category-items"><input type="checkbox" />Lives</li>
                    </ul>   
                </div>
                {/* Price Category */}
                <div className="price">
                    <h3 className="sidebar-lable">Prices</h3>
                    <ul>
                        <li className="category-items"><input type="checkbox" />150 - 499</li>
                        <li className="category-items"><input type="checkbox" />500 - 799</li>
                        <li className="category-items"><input type="checkbox" />800 - 999</li>
                        <li className="category-items"><input type="checkbox" />1000 +</li>
                    </ul>   
                </div>
                {/* Gender Category */}
                <div className="gender">
                    <h3 className="sidebar-lable">Gender</h3>
                    <ul>
                        <input type="radio" id="male" name="gender" value={"male"} />
                        <label htmlFor="male">Male</label>
                         <br/>
                         <input type="radio" id="female" name="gender" value={"female"} />
                         <label htmlFor="male">Female</label>
                    </ul>
                    
                </div>
            </div>
        </aside>
    )
}