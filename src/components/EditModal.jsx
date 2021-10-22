import React,{useState,useContext} from 'react';
import  './Modal.css'
import ProductsContext from './ProductContext';
function EditModal(props) {

   const[productName , setProductName] = useState("")
   const[productPrice , setProductPrice] = useState("")
   const ContextProducts = useContext(ProductsContext)

    return (
        <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                props.setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Welcome</h1>
          </div>
          <div className="body">
          <div>
            <p>ProductName</p>
            <input  onChange = {e=>setProductName(e.target.value)} className = "input" type = "text" name = "ProductName" defaultValue = {props.product.name}></input>
          </div>

          <div>
          <p>ProductPrice</p>
          <input onChange = {e=>setProductPrice(e.target.value)} className = "input" type = "text" name = "ProductPrice" defaultValue = {props.product.price}></input>
        </div>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                props.setOpenEditModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button
            onClick={()=>{
            if(productName!==""||productPrice!=="") 
            {
              ContextProducts.products.forEach(product => {
                if(product.id===props.product.id){
                  if(productName!=="")  {
                  product.name = productName
                  props.product.name = productName}
                  if(productPrice!==""){
                  product.price = productPrice
                  props.product.price = productPrice}
                }
              })
          
              props.setProduct(props.product)
             ContextProducts.setProducts(
              ContextProducts.products
            
             )
             
            }props.setOpenEditModal(false);}}

            >Continue</button>
          </div>
        </div>
      </div>
    );
}

export default EditModal;