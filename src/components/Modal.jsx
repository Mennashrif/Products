import React,{useState,useContext} from 'react';
import  './Modal.css'
import ProductsContext from './ProductContext';
function Modal(props) {

   const[productName , setProductName] = useState([])
   const[productPrice , setProductPrice] = useState([])
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
            <input  onChange = {e=>setProductName(e.target.value)} className = "input" type = "text" name = "ProductName" ></input>
          </div>

          <div>
          <p>ProductPrice</p>
          <input onChange = {e=>setProductPrice(e.target.value)} className = "input" type = "text" name = "ProductPrice" ></input>
        </div>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                props.setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button
            onClick={()=>{
             const product = {"src" :props.product.src,"id" : ContextProducts.products.at(-1).id+1,"price":productPrice,"name":productName}
             ContextProducts.setProducts(
               
             [...ContextProducts.products,product]
             
             )
             props.setOpenModal(false);
            }}

            >Continue</button>
          </div>
        </div>
      </div>
    );
}

export default Modal;