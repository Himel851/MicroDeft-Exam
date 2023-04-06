
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://microdeft.rifatewu.com/products/${productId}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
        </div>
    );
}

export default ProductDetails;

// import React, { useEffect, useState } from 'react'
// import {useParams} from 'react-router-dom'
// import axios from 'axios'
// import Image from 'react-bootstrap/Image'

// const ProductDetails = () => {
//     const {productId} = useParams();
//     const {product, setProduct} = useState(null);

//     useEffect(() => {
//         axios.get(`https://microdeft.rifatewu.com/products/${productId}`)
//             .then(response => setProduct(response.data))
//             .catch(error=> console.log(error))
//     }, [productId])

//   return (
//     <div>
//         <h1>{product.name}</h1>
//         <Image src={product.image} />
//         <p>{product.description}</p>
//         <p>Price: {product.price}</p>
//     </div>
//   )
// }

// export default ProductDetails