import { useContext } from "react"
import { AiOutlineHeart } from "react-icons/ai";
import { ApiDataContext } from "../../App"
import "./products.css"

export const Products = () => {

    const data = useContext(ApiDataContext);

    return (
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
                            <button className="product-button"><a href="#">View More</a></button>
                        </div>

                    </div>
                ))}

            </div>

        </section>

    )
}