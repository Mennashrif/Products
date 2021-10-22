import React from 'react';
import  "../App.css";
import "./Modal.css"
function AddProduct(props) {

    return (
        <div >
        <button onClick={()=> props.setModalOpen(true)} 
        className = "openModalBtn">Add Product</button>
        </div>
    );
}

export default AddProduct;