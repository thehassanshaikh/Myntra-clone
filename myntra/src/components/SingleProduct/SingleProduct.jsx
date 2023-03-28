import "./SingleProduct.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ApiDataContext } from "../../App";
import { AiOutlineHeart } from "react-icons/ai";
import { Loader } from "../Loader/Loader";


export const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)
    const {id}  = useParams();

    console.log(id)

        const getProduct = async () =>{
             await fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?id=${id}`)
             .then((res)=> res.json())

             .then((data)=>{
                setProduct(data);
                setLoading(false);
            })
             .catch((error)=>{console.log(error)})


        }

    useEffect(()=>{
        getProduct()
    },[id])


    console.log(product)
    return (loading ? <Loader /> :
        <section className="product-section">
        <div class="product-container">
		<div class="product-image">
			<img src={product[0]?.image} alt="" srcset="" />
		</div>
		<div class="product-details">
			<h1>{product[0]?.title}</h1>
			<p>{product[0]?.description}</p>
			<div class="price">₹{product[0]?.price}</div>
			<div class="buttons">
				<button>Add to Cart</button>
				<button>Add to Wish List <AiOutlineHeart /></button>
			</div>
		</div>
	</div>   
        </section>
    )
}