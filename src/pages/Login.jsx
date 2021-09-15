import styled from "styled-components";
import { mobile } from "../responsive";
import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
//import Loader from "./Loader";
import { requestSigninAPI, setLogOut_Action } from "../store/action/authAction";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
	width: 100vw;
	height: 100vh;

	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: white;
	${mobile({ width: "75%" })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
	margin-bottom: 10px;
`;

const Link = styled.a`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const Login = () => {
	const Signin = () => {
		//dispatch(requestSigninAPI(user));
		//	setIsLoaded(true);
	};
	const SignOut = () => {
		//	dispatch(setLogOut_Action());
		//	setIsLoaded(true);
	};

	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder="username" />
					<Input placeholder="password" />
					<Button onClick={Signin}>LOGIN</Button>
					<Link>FORGOT PASSWORD?</Link>
					<Link>CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
