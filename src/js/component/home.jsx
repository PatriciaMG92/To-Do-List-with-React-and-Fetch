import React from "react";
import {useState} from "react";
import Title from "./title.jsx";
import Input from "./input.jsx";
import List from "./list.jsx";


//create your first component
const Home = () => {

	const [userInput, setUserInput] = useState('');

	const [toDoList, setToDoList] = useState([]);

	const newToDoItem = {
		id:Date.now(),
		task: userInput,
	}


	const handleChange = (e) =>{
		setUserInput(e.target.value);
		console.log(userInput);
	}

	let enter = 13;
	const handleKeyPressed=(e)=>{
		if(e.keyCode == enter){
			e.preventDefault();
    		if(userInput===''){
				alert('You must fill the input');
			}else{
	 			setToDoList(toDoList=>[...toDoList, newToDoItem]);
	 		
	 			setUserInput('')
	 			console.log(toDoList);
			}
			document.getElementById("input").value='';
		}
	}

	

	return (
		<>
			<div id="container" className="container-sm text-center">
				<Title />
				<div className="row justify-content-center">
					<div className="col-sm-3 col-md-7 col-lg-9">
						
						<Input handleChange={handleChange} handleKeyPressed={handleKeyPressed}/>
						<List toDoList={toDoList} setToDoList={setToDoList}/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
