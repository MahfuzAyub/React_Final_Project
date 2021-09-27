import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import Loader from "./Loader";
import { RequestSigninAPI, setLogOut_Action } from "../store/action/authAction";
import { requestAddCartAPI } from "../store/action/cartAction";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Login.jsx";
import styled from "styled-components";
import { setCartBfLogin_action } from "../store/action/cartAction";

const Signinn = () => {
	const Container = styled.div`
		width: 100vw;
		height: 100vh;

		align-items: center;
		justify-content: center;
	`;

	const Wrapper = styled.div`
		width: 25%;
		padding: 20px;
		background-color: white;
	`;

	const Title = styled.h6`
		font-size: 10px;
		font-weight: 800;
	`;

	const Form = styled.form`
		display: flex;
		flex-direction: column;
	`;

	const input = styled.input`
		min-width: 40%;
		margin: 10px 0;
		padding: 10px;
	`;

	const Button = styled.button`
		width: 200%;
		height: 25%;
		background-color: red;
		color: white;
		cursor: pointer;
	`;

	const Link = styled.a`
		margin: 5px 0px;
		font-size: 12px;
		text-decoration: underline;
		cursor: pointer;
	`;

	const [user, setuser] = useState({
		enail: "",
		password: "",
	});
	const { id } = useParams();
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const token = useSelector((store) => store.authStore.token?.token);
	const authStore = useSelector((store) => store.authStore.token);
	useEffect(() => {

		dispatch(requestAddCartAPI( id , token, 1));
		console.log(id, "param requestAddCartAPI");
		if (token) {
			history.push("/");
		}
	}, [authStore]);
	const setSigninData = (e, key) => {
		setuser({ ...user, [key]: e.target.value });
		console.log(e.target.value);
	};

	const Signin = () => {
		dispatch(RequestSigninAPI(user))
		setIsLoaded(true);
		if (token) { history.push("/"); }
	};
	const SignOut = () => {
		dispatch(setLogOut_Action());
		setIsLoaded(true);
	};

	return (
		<>
			<div class="container">
				<Title>LOG IN</Title>

				<input
					class="Input"
					placeholder="Email"
					onChange={(e) => setSigninData(e, "enail")}
				/>
				<input
					type="password"
					class="Input"
					placeholder="password"
					onChange={(e) => setSigninData(e, "password")}
				/>

				<button class="Button" onClick={() => Signin()}>
					Log In
				</button>
				{/* <Button onClick={() => SignOut()}>Log Out</Button> */}
			</div>
		</>
	);
};
export default Signinn;
