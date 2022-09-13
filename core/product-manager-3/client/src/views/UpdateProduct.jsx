import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log("ERROR", err))
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        const updated = {
            title,
            price,
            description
        }
        
        axios.put(`http://localhost:8000/api/products/${id}`, updated)
            .then(res => console.log(res))
            .then(navigate('/'))
            .catch(err => console.error(err))
    }

    return (
        <>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <div>
                    <label>Title</label>
                    <input onChange={e => setTitle(e.target.value)} value={title} />
                </div>
                <div >
                    <label >Price</label>
                    <input type='number' step='.01' onChange={e => setPrice(e.target.value)} value={price} />
                </div>
                <div>
                    <label >Description</label>
                    <input onChange={e => setDescription(e.target.value)} value={description} />
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}

export default UpdateProduct;










