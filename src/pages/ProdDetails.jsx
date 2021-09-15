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

const ProdDetails = () => {
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

	return (
		<>
			<h1>Product Details</h1>
			{
				<div>
					<div>{!isLoaded && <Loader />}</div>
					<img
						src={"http://192.168.57.19:8080/products"+reduxStore.currentProduct?.image}
						style={{ width: "25% " }}></img>
					<p>Name : {reduxStore.currentProduct?.title} </p>
					<p>Category : {reduxStore.currentProduct?.category?.name} </p>
					<p>Description :{reduxStore.currentProduct?.description} </p>
					<p>Price : {reduxStore.currentProduct?.price} </p>
					<p>Stock : {reduxStore.currentProduct?.stock} </p>
					<button onClick={() => bactToList()}>Back to List</button>
					<div>
						<button onClick={() => goEditPage(reduxStore.currentProduct._id)}>
							Edit
						</button>
					</div>
					<div>
						<button onClick={() => goDeletePage(reduxStore.currentProduct._id)}>
							Delete Product
						</button>
					</div>
				</div>
			}
		</>
	);
};
export default ProdDetails;
