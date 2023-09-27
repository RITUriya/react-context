import React, { useContext } from "react";
import IncreaseCountButton from "./IncreaseCountButton";
import { CountContext } from "../contexts/CountContext";

const DisplayCount = (props) => {
	const { count } = useContext(CountContext);
	return (
		<div>
			{/* props drilling down to the increase count button page here setcount is coming from app.js and will be transfered to increase count page without being used here */}
			{/* <h1>Count Page: </h1>
			<h2>{props.count}</h2>
			<IncreaseCountButton setCount={props.setCount} /> */}

			{/* context api */}
			<h1>Count Page: {count}</h1>
		</div>
	);
};

export default DisplayCount;
