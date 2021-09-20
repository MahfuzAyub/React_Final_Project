import React, { useEffect, useState } from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";
import { Redirect, useHistory, useLocation } from "react-router";
import axios from "axios";
import EditProduct from "./EditProduct";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { requestProductDetails } from "../store/action/prodDetailAction";
import styled from "styled-components";

const ProdDetails = () => {
	const Container = styled.div`
		margin: 50px 800px;
		justify-content: center;
		cursor: pointer;
	`;
const Image = styled.img`
	height: 75%;
	z-index: 2;
	margin: 5px;
	width: 300px;
`;
	

	const reduxStore = useSelector((store) => store.detailStore);
	const dispatch = useDispatch();

	const { id } = useParams();
	const histor = useHistory();
	const bactToList = () => {
		histor.push("/");
	};
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		dispatch(requestProductDetails(id));
		setIsLoaded(true);
	}, [dispatch]);

	const goEditPage = (id) => {
		histor.push(`/Edit/${id}`);
	};
	const goDeletePage = (id) => {
		histor.push(`/delete/${id}`);
	};
	const token = useSelector((store) => store.authStore.token);

	return (
		<>
			{
				<Container>
					<div>{!isLoaded && <Loader />}</div>
					<Image
						src={
							"http://192.168.57.19:8080/products" +
							reduxStore.currentProduct?.image
						}></Image>
					<p class="">Name : {reduxStore.currentProduct?.title} </p>
					<p>Category : {reduxStore.currentProduct?.category?.name} </p>
					<p>Description :{reduxStore.currentProduct?.description} </p>
					<p>Price : {reduxStore.currentProduct?.price} </p>
					<p>Stock : {reduxStore.currentProduct?.stock} </p>
					<div>
						{token?.role == "admin" && (
							<>
								<button
									class="Button"
									onClick={() => goEditPage(reduxStore.currentProduct._id)}>
									Edit
								</button>
								<button
									class="Button"
									onClick={() => goDeletePage(reduxStore.currentProduct._id)}>
									Delete Product
								</button>
							</>
						)}
						<button class="Button" onClick={() => bactToList()}>
							Back to List
						</button>
					</div>
				</Container>
			}
		</>
	);
};
export default ProdDetails;
