import React from "react";
import ItemsOfList from "./itemslist.jsx";
import Footer from "./footer.jsx"


const List = (props) => {

	const {toDoList, setToDoList} = props;

	const deleteTask=(id)=>{
		const newToDoListWithFilter=toDoList.filter(item=>item.id !==id);
		setToDoList(newToDoListWithFilter);
		console.log(id);
		console.log(newToDoListWithFilter)
	}

	return (
		<>
			<ul className="list-group text-start">
				{toDoList.map((item)=>{
					return <ItemsOfList id={item.id} key={item.id} item={item} deleteTask={deleteTask}/>
				})}
				<Footer toDoList={toDoList}/>
            </ul>
		</>
	);
};

export default List;
