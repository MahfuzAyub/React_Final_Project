import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
//import Loader from "./Loader";
import {
	requestAddCartAPI,
	setCartBfLogin_action,
} from "../store/action/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { RequestCartList } from "../store/action/cartAction";
import { RequestMyOrderList } from "../store/action/orderAction";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";

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

const MyOrders = ({ item }) => {
	//const listStore = useSelector((store) => store.listStore);
	
	const dispatch = useDispatch();
	const orderStore = useSelector((store) => store.orderStore);
	//const [isLoaded, setIsLoaded] = useState(false);
	//const params = useParams();
	//const history = useHistory();
	const token = useSelector((store) => store.authStore.token?.token);
	//const cart = useSelector((store) => store.cartStore.cart?.products);

	useEffect(() => {
		//dispatch(requestProductList());
		dispatch(RequestMyOrderList(token));
		//	dispatch(RequestCartList(token));
		//setIsLoaded(true);
		console.log(orderStore.orderList, "order list");
	}, [dispatch]);

	return (
		<Container><h1>dfdfdf</h1>
			<MaterialTable
				columns={[
					//{ title: "Name", field: 'orderStore.orderList.products.title' },
					{ title: "Date", field: "date" },
					{ title: "Order ID", field: "_id" },
					{
						title: "STATUS",
						field: "status",
						lookup: { 0: "Pending", 1: "Completed", 2: "Rejected" },
					},
				]}
				data={orderStore.orderList}
			/>
		</Container>
	);
};
export default MyOrders;
