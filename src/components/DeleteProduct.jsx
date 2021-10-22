import React,{useContext} from 'react';
import ProductsContext from './ProductContext';

function DeleteProduct(props) {
    const ContextProducts = useContext(ProductsContext)

    return (
        <button
            onClick={() => {
                props.setProduct({ name: null })
                ContextProducts.setProducts(
                    ContextProducts.products.filter(product=> product.id!==props.product.id)
                )
            }}
            className="changeProductBtn"
        >
            Delete
        </button>
    );
}

export default DeleteProduct;