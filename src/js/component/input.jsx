import React from "react";

const Input = (props) => {

	const {handleChange, handleKeyPressed} = props;

	return (
		<>
			<form>
				<input id="input" type="text" className="form-control ps-5" placeholder="What needs to be done?" onChange={handleChange} onKeyDown={handleKeyPressed}/>
			</form>	
		</>
	);
};

export default Input;
