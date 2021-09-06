import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import Loader from "./Loader";
import { requestSigninAPI } from "../store/action/authAction";
import { useDispatch, useSelector } from "react-redux";

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

	const Signin=() => {
		dispatch(requestSigninAPI(user));
		setIsLoaded(true);
	};

	
	return (
		<>
			<div>
				<p>enail</p>
				<input onChange={(e) => setSigninData(e, "enail")} />
				<p>Password</p>
				<input onChange={(e) => setSigninData(e, "password")} />
				<div>
					<button onClick={Signin}>Add user</button>
				</div>
			</div>
		</>
	);
};
export default Signinn;
