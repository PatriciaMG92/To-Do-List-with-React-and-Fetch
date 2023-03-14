import React from "react";

const Footer = (props) => {

	const {toDoList} = props;

	return (
		<>
			<div id="footer" className="text-start ps-3 pt-1">{toDoList.length} items left</div>
		</>
	);
};

export default Footer;
