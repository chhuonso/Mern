import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const formSubmitHandler = e => {
        e.preventDefault();

        console.log("title", title);
        console.log("price", price);
        console.log("description", description);

        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))


        setTitle("");
        setPrice("");
        setDescription("");
    }


return (
    <>
        <h1>Product Manager</h1>
        <form onSubmit={formSubmitHandler}>
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



export default ProductForm;