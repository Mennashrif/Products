import React, {useContext} from 'react';
import ProductsContext from './ProductContext';
function ProductSideBar(props) {

    const ContextProducts = useContext(ProductsContext);

    const listItems =ContextProducts.products.map(product =>
        <li onClick={()=>props.setproduct(product)} className="py-2 px-4 hover:bg-red-400"
            key={product.id.toString()}>
            {product.name}
        </li>
    )
    return (

        <div className=" w-64 text-white px-2 py-2 space-y-4 ">
            <span className="text-2xl font-extrabold px-2">
                Products
            </span>

            <nav  >
                {listItems}
            </nav>
        </div>



    );
}

export default ProductSideBar;