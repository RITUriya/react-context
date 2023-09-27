import React, { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

const Profile = () => {
	const { username } = useContext(LoginContext);
	return (
		<div className="profilePage">
			<h2>Profile Page</h2>
			<h3>Username: {username}</h3>
		</div>
	);
};

export default Profile;
