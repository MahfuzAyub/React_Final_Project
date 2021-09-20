import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Redirect, useHistory, useLocation } from "react-router";
import { requestSigninAPI, setLogOut_Action } from "../store/action/authAction";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
	height: 60px;
	${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
	${mobile({ width: "50px" })}
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
	const history = useHistory();
	const token = useSelector((store) => store.authStore.token);
	const dispatch = useDispatch();

	const gotoCart = () => {
		history.push("/cart");
	};
	const SignOut = () => {
		dispatch(setLogOut_Action());
		//setIsLoaded(true);
	};

	return (
		<Container>
			<Wrapper>
				<Left>
					<MenuItem>
						<Link to="/">Products</Link>
					</MenuItem>
					<SearchContainer>
						<Input placeholder="Search" />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>E-Shop..</Logo>
				</Center>
				<Right>
					<MenuItem>
						{token?.role == "user" && (
							<Badge color="primary" onClick={() => gotoCart()}>
								<ShoppingCartOutlined />
							</Badge>
						)}
					</MenuItem>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>
						{!token?.token && <Link to="/signin">Log In</Link>}
						{token?.token && (
							<Link to="/" onClick={() => SignOut()}>
								{token?.user}
								<span width="15px"></span>
								<span> (Log Out) </span>
							</Link>
						)}
					</MenuItem>

					<MenuItem>
						{token?.role == "admin" && (
							<Link to="/AddProduct">Add Product</Link>
						)}
					</MenuItem>
					{/* <Link to="/cart">Cart</Link> */}
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
