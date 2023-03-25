import "./SingleProduct.css"
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ApiDataContext } from "../../App";

export const SingleProduct = () => {
    const { id } = useParams();
    const data = useContext(ApiDataContext);
    const product = data.find(item => item.id === parseInt(id));

    const [title, category, image, description, price] = data;

    return (
        <section className="single-product-section">
            <img src={image} width={"100px"} height={"100px"} alt="" />
            <h3>Product Title: {title}</h3>
            <h3>Price: ₹{price}</h3>
            <p>Description: {description}</p>
            {/* <p>Rating: {product.rating}</p> */}
            <p>Category: {category}</p>
            <button>Add to cart</button>
        </section>
    )
}