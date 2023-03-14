import React from "react";

const DeleteButton = (props) =>{

    const {deleteTask, id} = props;

    return (
        <>
            <button onClick={()=>{deleteTask(id)}}><i className="fa fa-solid fa-trash fa-xs" style={{padding:0.5+'em'}}></i></button>
        </>
    )
    
}


export default DeleteButton;