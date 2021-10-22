import React from 'react';
import background from '../images/bbgg.avif'
import DeleteProduct from './DeleteProduct';
import EditProduct from './EditProduct';
import p from '../images/p4.avif'
function DetailedProduct(props) {

    return (
        <React.Fragment>
            {props.product.name != null ?

                <img src={p} className="px-3 min-h-screen" alt={props.product.name} />
                : <img src={background} className="px-16 min-h-screen" alt="background" />}
            <div>
                <div className="text-2xl font-extrabold px-20 py-20">
                    <p>{props.product.name}</p>
                    <p>{props.product.price}</p>
                </div>
                
                {props.product.name != null ?
                    <p className="text-l ">"Bliss uses this product’s second page to focus on four key ingredients and their benefits.
                        These aren’t the only ingredients in the formulation,
                        but the company doesn’t want to crowd the page with too much information. Wisely,
                        Bliss uses a link called “See Full Ingredient List” for customers who want to learn more.
                        The page also has accordions for further details."</p> : null}
                    <div className = "flex">
                    <DeleteProduct product={props.product} setProduct={props.setProduct} />
                    <EditProduct  setEditModalOpen={props.setEditModalOpen} product={props.product} setProduct={props.setProduct}/>
                    </div>
            </div>
        </React.Fragment>


    );
}

export default DetailedProduct;