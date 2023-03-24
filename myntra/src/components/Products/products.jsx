import { useContext } from "react"
import { AiOutlineHeart } from "react-icons/ai";
import { ApiDataContext } from "../../App"
import "./products.css"

export const Products = ()=>{

const data = useContext(ApiDataContext);

return(
<section className="products-section">
    <div className="product-container">
        <div className="product-grid">
            <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" alt="product image"
                className="pro-img" />
            <div className="brand-con">
                <h4 className="brand-name">Brand Name</h4>
                <AiOutlineHeart />
            </div>
            <h3 className="pro-name">Men Rust Red Graphic Printed Cotton</h3>
            <h3 className="pro-price">$2,155</h3>
            <button className="pro-buttton">Add to Bag</button>
        </div>
        <div className="product-grid">
            <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" alt="product image"
                className="pro-img" />
            <div className="brand-con">
                <h4 className="brand-name">Brand Name</h4>
                <AiOutlineHeart />
            </div>
            <h3 className="pro-name">Men Rust Red Graphic Printed Cotton</h3>
            <h3 className="pro-price">$2,155</h3>
            <button className="pro-buttton">Add to Bag</button>
        </div>
        <div className="product-grid">
            <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" alt="product image"
                className="pro-img" />
            <div className="brand-con">
                <h4 className="brand-name">Brand Name</h4>
                <AiOutlineHeart />
            </div>
            <h3 className="pro-name">Men Rust Red Graphic Printed Cotton</h3>
            <h3 className="pro-price">$2,155</h3>
            <button className="pro-buttton">Add to Bag</button>
        </div>
        <div className="product-grid">
            <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" alt="product image"
                className="pro-img" />
            <div className="brand-con">
                <h4 className="brand-name">Brand Name</h4>
                <AiOutlineHeart />
            </div>
            <h3 className="pro-name">Men Rust Red Graphic Printed Cotton</h3>
            <h3 className="pro-price">$2,155</h3>
            <button className="pro-buttton">Add to Bag</button>
        </div>
    </div>

</section>

)
}