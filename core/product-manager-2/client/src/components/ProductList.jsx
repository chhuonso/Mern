import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    return (
        <>
            {props.products.map((product, index) =>
                <div key={index}>
                    <Link to={`/product/${product._id}`}>
                        <p>{product.title}</p>
                    </Link>
                </div>
            )}
        </>
    )
}

export default ProductList

