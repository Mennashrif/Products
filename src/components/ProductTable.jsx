import React, {  useState } from 'react';
import ProductSideBar from './ProductSideBar';
import DetailedProduct from './DetailedProduct'
import AddProduct from './AddProduct'
import ProductsContext from './ProductContext';
import Products from './Products.json'
import Modal from './Modal';
import EditModal from './EditModal';

function ProductTable(props) {
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState(Products);
    const [modalOpen, setModalOpen] = useState(false);
    const [EditModalOpen, setEditModalOpen] = useState(false);


   


    return (
        <ProductsContext.Provider value={{products:products,setProducts:setProducts}} >
            <div className="bg-gray-200  min-h-screen flex">
                {EditModalOpen && <EditModal setOpenEditModal={setEditModalOpen} product={product} setProduct={setProduct}/>}
                {modalOpen && <Modal setOpenModal={setModalOpen}/>} 
                <div className = "bg-black" >
                <ProductSideBar setproduct={setProduct} />  
                <AddProduct setModalOpen={setModalOpen} />
                
                </div>
                <DetailedProduct product={product} setProduct={setProduct} setEditModalOpen={setEditModalOpen}/>
                
            </div>
        </ProductsContext.Provider>
    );
}

export default ProductTable;