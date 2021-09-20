import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
//import Loader from "./Loader";
import { requestAddCartAPI } from "../store/action/cartAction";
import { requestCategorytList } from "../store/action/category/catListAction";
import { useDispatch, useSelector } from "react-redux";
import { RequestCartList } from "../store/action/cartAction";

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
`;

const Wrapper = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
`;

const Circle = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: white;
	position: absolute;
`;

const Image = styled.img`
	height: 75%;
	z-index: 2;
	margin: 5px;
	width: 300px;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;
const Details = styled.div`
	margin: 5px;
	justify-content: center;
	text-align: center;
`;
export const Container = styled.div`
	margin: 5px;
	justify-content: center;
	cursor: pointer;
`;

const Product = ({ item }) => {
	const listStore = useSelector((store) => store.listStore);
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const params = useParams();
	const history = useHistory();
	const token = useSelector((store) => store.authStore.token);
	const cart = useSelector((store) => store.cartStore.cart?.products);

	const getDetials = (id) => {
		history.push(`/Details/${id}`);
	};
	useEffect(() => {
		dispatch(RequestCartList(token));
	}, [dispatch,token]);
	const addToCart = (id, token, action) => {
		const item = cart?.find((item) => item.productId._id === id);

		// calc quantity
		let quantity = null;
		if (action == "add") {
			quantity = !item ? 1 : item.quantity + 1;
		}
		if (action == "remove") {
			if (item.quantity <= 1) quantity = 0;
			else quantity = item.quantity - 1;
		}
		dispatch(requestAddCartAPI(id, token, quantity));
  };
  
  const role = token?.role;
  console.log(role, "token?.role");
	return (
		<Container>
			<Wrapper>
				<Circle />
				<Image src={"http://localhost:8080/products" + item.image} />
				<Info>
					{ token?.role == 'user' && (
						<Icon>
							<ShoppingCartOutlined
								onClick={() => addToCart(item._id, token?.token, "add")}
							/>
						</Icon>
					)}

					<Icon>
						<SearchOutlined onClick={() => getDetials(item._id)} />
					</Icon>
					{/* <Icon>
						<FavoriteBorderOutlined />
					</Icon> */}
				</Info>
			</Wrapper>
			<Details onClick={() => getDetials(item._id)}>{item.title}</Details>
		</Container>
	);
};
export default Product;
