import React, { useContext } from "react";
import { useState } from "react";
import { LoginContext } from "../contexts/LoginContext";

const LoginPage = () => {
	// const [username, setUsername] = useState("");
	// const [loginUser, SetLoginUser] = useState(false);

	const { setUsername, SetLoginUser } = useContext(LoginContext);
	return (
		<div className="loginPage">
			<h2>Login Page</h2>

			<label>Username</label>
			<input type="text" onChange={(obj) => setUsername(obj.target.value)} />

			<label>Password</label>
			<input type="password" />
			<button onClick={() => SetLoginUser(true)}>Login</button>

			{/* {loginUser && <h1>{username}</h1>} */}
		</div>
	);
};

export default LoginPage;
