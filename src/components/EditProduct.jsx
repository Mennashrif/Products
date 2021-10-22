import React,{useContext} from 'react';
import ProductsContext from './ProductContext';

function EditProduct(props) {
  const ContextProducts = useContext(ProductsContext)
    return (
        <div>
        <button
        onClick={() => {
          props.setModalOpen(true)
          props.setProduct({ name: null })
          ContextProducts.setProducts(
            ContextProducts.products.filter(product=> product.id!==props.product.id)
        )
        }}
         className = "changeProductBtn"
      >
        Edit
      </button>  
        </div>
    );
}

export default EditProduct;