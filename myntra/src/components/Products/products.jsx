import { useContext } from "react"
import { Link } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import { AiOutlineHeart } from "react-icons/ai";
import { ApiDataContext } from "../../App"
import "./products.css"

export const Products = () => {

    const data = useContext(ApiDataContext);


    return (
        <>
            <Sidebar />
            <section className="products-section">
                <div className="product-container">
                    {data.map(item => (
                        <div className="product-grid">
                            <div className="pro-img-con">
                                <img src={item.image} alt="product image"
                                    className="pro-img" />
                            </div>
                            <div className="product-ditails">
                                <h3 className="product-brand">Brand Name</h3>
                                <h3 className="product-title">{item.title}</h3>
                                <h3 className="product-price">₹ {item.price}</h3>
                                <button className="product-button"><a href="#"><Link to={`/product-details/${item.id}`} key={item.id}>View More</Link></a></button>
                            </div>

                        </div>
                    ))}

                </div>

            </section>
        </>
    )
}