import React, { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

const IncreaseCountButton = (props) => {
	const { count, setCount } = useContext(CountContext);

	const buttonClick = () => {
		return setCount((count) => count + 1);
	};
	return (
		<div>
			{/* prop drilling */}
			{/* <button
				onClick={() => {
					props.setCount((count) => count + 1);
				}}>
				Increase count
			</button> */}

			{/* context api */}
			{/* one way of calling the buttonclick{" "} 
			<button onClick={buttonClick.bind(this, count)}>Increase count</button>*/}
			<button onClick={() => setCount((count) => count + 1)}>
				Increase count
			</button>
		</div>
	);
};

export default IncreaseCountButton;
