import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
const ProductList = (props) => {

        const { removeFromDom } = props;
        
        const deleteProduct = (productId) => {
            axios.delete('http://localhost:8000/api/products/' + productId)
                .then(res => {
                    removeFromDom(productId)
                })
                .catch(err => console.error(err));
        }


    return (
        <>
            {props.products.map((product, index) =>
                <div key={index}>
                    <Link to={`/product/${product._id}`}>
                        <p>{product.title}</p>
                    </Link>
                    <button onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </button>
                </div>
            )}
        </>
    )
}

export default ProductList

