import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import Loader from "./Loader";
import { requestSigninAPI, setLogOut_Action } from "../store/action/authAction";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Login.jsx";
import styled from "styled-components";
import { requestSignupAPI } from "../store/action/authAction";

const Register = () => {
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

	const Title = styled.h5`
		font-size: 30px;
		font-weight: 700;
		
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
		username: "",
		firstname: "",
		lastname: "",
		city: "",
		street: "",
		phone: "",
		password: "",
	});
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const setSigninData = (e, key) => {
		setuser({ ...user, [key]: e.target.value });
		console.log(e.target.value);
	};
	const Signup = () => {
		dispatch(requestSignupAPI(user));
		setIsLoaded(true);
		history.push("/");
	};
	return (
		<>
			<div class="container">
				<Title>Registration</Title>
				<p class="PTAG">EMAIL</p>
				<input
					class="Input"
					placeholder="Email"
					onChange={(e) => setSigninData(e, "enail")}
				/>
				<p class="PTAG">USER NAME</p>
				<input
					class="Input"
					placeholder="username"
					onChange={(e) => setSigninData(e, "username")}
				/>
				<p class="PTAG">FIRST NAME</p>
				<input
					class="Input"
					placeholder="firstname"
					onChange={(e) => setSigninData(e, "firstname")}
				/>
				<p class="PTAG">LAST NAME</p>
				<input
					class="Input"
					placeholder="lastname"
					onChange={(e) => setSigninData(e, "lastname")}
				/>
				<p class="PTAG">CITY</p>
				<input
					class="Input"
					placeholder="city"
					onChange={(e) => setSigninData(e, "city")}
				/>
				<p class="PTAG">STREET</p>
				<input
					class="Input"
					placeholder="street"
					onChange={(e) => setSigninData(e, "street")}
				/>
				<p class="PTAG">PHONE</p>
				<input
					class="Input"
					placeholder="phone"
					onChange={(e) => setSigninData(e, "phone")}
				/>

				<p class="PTAG">PASSWORD</p>
				<input
					class="Input"
					placeholder="password"
					onChange={(e) => setSigninData(e, "password")}
				/>

				<button class="Button" onClick={() => Signup()}>
					Register
				</button>
				{/* <Button onClick={() => SignOut()}>Log Out</Button> */}
			</div>
		</>
	);
};
export default Register;
