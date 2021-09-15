import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import Loader from "./Loader";
import { requestSigninAPI, setLogOut_Action } from "../store/action/authAction";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Login.jsx";

const Signinn = () => {
	const [user, setuser] = useState({
		enail: "",
		password: "",
	});
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const setSigninData = (e, key) => {
		setuser({ ...user, [key]: e.target.value });
		console.log(e.target.value);
	};

	const Signin = () => {
		dispatch(requestSigninAPI(user));
		setIsLoaded(true);
	};
	const SignOut = () => {
		dispatch(setLogOut_Action());
		setIsLoaded(true);
	};

	return (
		<>
			<div>
				<p>email</p>
				<input onChange={(e) => setSigninData(e, "enail")} />
				<p>Password</p>
				<input onChange={(e) => setSigninData(e, "password")} />
				<div>
					<button onClick={Signin}>Log In</button>
					<button onClick={SignOut}>Log Out</button>
				</div>
			</div>
		</>
	);
};
export default Signinn;
