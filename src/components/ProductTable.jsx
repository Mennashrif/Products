import React, {  useState } from 'react';
import ProductSideBar from './ProductSideBar';
import DetailedProduct from './DetailedProduct'
import AddProduct from './AddProduct'
import ProductsContext from './ProductContext';
import Products from './Products.json'
import Modal from './Modal';


function ProductTable(props) {
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState(Products);
    const [modalOpen, setModalOpen] = useState(false);
 


   


    return (
        <ProductsContext.Provider value={{products:products,setProducts:setProducts}} >
            <div className="bg-gray-200  min-h-screen flex">
                {modalOpen && <Modal setOpenModal={setModalOpen} product={product}/>} 
                <div className = "bg-black" >
                <ProductSideBar setproduct={setProduct} />  
                <AddProduct setModalOpen={setModalOpen} />
                
                </div>
                <DetailedProduct product={product} setProduct={setProduct} setModalOpen={setModalOpen}/>
                
            </div>
        </ProductsContext.Provider>
    );
}

export default ProductTable;