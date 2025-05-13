import React, { useEffect, useState } from 'react'
import Product from './Product';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await fetch('http://localhost:3000/meals');
            if (!response.ok) {
                console.log("error occured during meals fetching.");
            }

            const data = await response.json();

            setProducts(data);
        }

        getProducts();

    }, []);

    return (
        <ul id="meals">
            {products.length === 0 && <h1> Products are loading.</h1>}
            {products.length > 0 && (
                products.map((meal) => (
                    <Product key={meal.id} meal={meal} />
                )
                ))}
        </ul>
    )
}

export default Products
