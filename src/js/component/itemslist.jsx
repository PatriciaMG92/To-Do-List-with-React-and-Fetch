import React from "react";
import {useState} from "react";
import DeleteButton from "./deletebutton.jsx";

const ItemsOfList = (props) => {

	const {item, deleteTask} = props;

	const [isMouseOver, setIsMouseOver] = useState();

	const onMouseEnter =(isMouseOver)=>{
		setIsMouseOver(isMouseOver=true);
	};

	const onMouseLeave = (isMouseOver) =>{
		setIsMouseOver(isMouseOver=false);

	}


	return (
		<>
			<li className="ps-5 d-flex justify-content-between" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{item.task}{isMouseOver === true &&
			<DeleteButton id={item.id} deleteTask={deleteTask}/>}</li>
		</>
	);
};

export default ItemsOfList;
