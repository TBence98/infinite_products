import { useState} from 'react';
import useLoadProducts from '../hooks/useLoadProducts';

const Products = () => {
    const [pageNum, setPageNum] = useState(0);
    const {
        products,
        hasMore,
        loading,
        error
    } = useLoadProducts(10, pageNum);

    const incPageNum = () => {
        setPageNum(prevNum => prevNum + 10);
    }

    console.log(products);
    return (
        <>
        <h1>Hello World</h1>
        <ul>
            {products.map(product => {
            return (<li key={product.id}>{product.title}</li>)
            })}
        </ul>
        <button onClick={incPageNum}>Increase</button>
        </>
    )
}

export default Products;