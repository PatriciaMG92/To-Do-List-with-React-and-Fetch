import React from "react";
import {useState, useEffect} from "react";
import Title from "./title.jsx";
import Input from "./input.jsx";
import List from "./list.jsx";


//create your first component
const Home = () => {

	const [userInput, setUserInput] = useState('');

	const [toDoList, setToDoList] = useState([]);

	useEffect(() =>{
        getToDos();
    },[]) 

	const newToDoItem = {
		id:Date.now(),
		task: userInput,
		label: userInput,
		done:false,
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
				updateToDos(toDoList);
			}
			document.getElementById("input").value='';
		}
	}

	const getToDos= async()=>{
		await fetch('https://assets.breatheco.de/apis/fake/todos/user/patriciamg',{
			headers: {
				"Content-Type": "application/json"
			  }
			})
		.then((resp) => {
			if (!resp.ok){
			   postToDos()
			} else{
				return resp.json();
			}
			
		})
		.then((items) => {
			setToDoList(items);
		})
	}

	const postToDos = async() => {
		await fetch('https://assets.breatheco.de/apis/fake/todos/user/patriciamg', {
		method: 'POST',
		body:[],
		headers: {
			"Content-Type": "application/json"
		  }
		})
		.then((resp) => {
			console.log(resp);
			
			if (!resp.ok){
				throw new Error(response.statusText);  
			}
			getToDos ()
		})
		
	}

	const updateToDos = async(tasks) =>{
		await fetch('https://assets.breatheco.de/apis/fake/todos/user/patriciamg', {
			method: 'PUT',
			body: JSON.stringify(tasks),
			headers: {
				"Content-Type": "application/json"
			  }
		})
		.then(res => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then(data => {
			console.log("Success", data);
		})
		.catch(error => {
			console.log('Looks like there was a problem: \n', error);
		})
	}

	return (
		<>
			<div id="container" className="container-sm text-center">
				<Title />
				<div className="row justify-content-center">
					<div className="col-sm-3 col-md-7 col-lg-9">
						
						<Input handleChange={handleChange} handleKeyPressed={handleKeyPressed}/>
						<List toDoList={toDoList} setToDoList={setToDoList} updateToDos={updateToDos}/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
