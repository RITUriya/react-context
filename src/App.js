import logo from "./logo.svg";
import "./App.css";
import { LoginContext } from "./contexts/LoginContext";
import LoginPage from "./component/LoginPage";
import { useState } from "react";
import Profile from "./component/Profile";
import DisplayCount from "./component/DisplayCount";
import IncreaseCountButton from "./component/IncreaseCountButton";
import { CountContext } from "./contexts/CountContext";

function App() {
	const [username, setUsername] = useState("");
	const [loginUser, SetLoginUser] = useState(false);
	const [count, setCount] = useState(0);
	return (
		<div className="App">
			<CountContext.Provider value={{ count, setCount }}>
				{" "}
				<DisplayCount />
				<IncreaseCountButton />
			</CountContext.Provider>
			{/* <DisplayCount count={count} setCount={setCount} /> */}
			<LoginContext.Provider value={{ username, setUsername, SetLoginUser }}>
				{loginUser ? <Profile /> : <LoginPage />}
			</LoginContext.Provider>
		</div>
	);
}

export default App;
