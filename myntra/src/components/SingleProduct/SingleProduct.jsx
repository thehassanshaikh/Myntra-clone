import "./SingleProduct.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ApiDataContext } from "../../App";

export const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const {id}  = useParams();

    console.log(id)

        const getProduct = async () =>{
             await fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?id=${id}`).then((res)=> res.json())
             .then((data)=>{
                // console.log(data)
                setProduct(data);
            })
             .catch((error)=>{console.log(error)})


        }

    useEffect(()=>{
        getProduct()
    },[id])


    console.log(product)
    return (
        <section className="product-section">
            <h2>{product[0]?.title}</h2>
        </section>
    )
}