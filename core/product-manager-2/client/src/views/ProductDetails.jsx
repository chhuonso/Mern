import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
    
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h1>{product.title}</h1>
            <h3>Price: ${product.price}</h3>
            <h3>Description: {product.description}</h3>
        </>
    )
}

export default ProductDetails;