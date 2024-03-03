//styles
import styles from './Products.module.css';
// dependencies
import React from 'react';
import { GET_PRODUCTS } from '../../APIs/Product';
import useFetch from '../../Hook/useFetch';
// components
import Card from './Card';

const Products = () => {
    const { loading, error, data, request } = useFetch();

    React.useEffect(() => {
        const { url, options } = GET_PRODUCTS();
        request(url, options);
    }, [request]);

    return (
        <section className={styles.products}>
            <h1>Products List</h1>
            {loading && <p>Loading...</p>}
            {error && <h1>ERRO: {error}</h1>}
            <div>
                {
                    data && data.map((product) => (
                        <Card key={product.id} product={product} />
                    ))
                }
            </div>
        </section>
    )
}

export default Products