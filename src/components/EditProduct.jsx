import React from 'react';


function EditProduct(props) {

    return (
        <div>
        <button
        onClick={() => 
          props.setEditModalOpen(true)
        }
         className = "changeProductBtn"
      >
        Edit
      </button>  
        </div>
    );
}

export default EditProduct;