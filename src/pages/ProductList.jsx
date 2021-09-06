import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import axios from "axios";
import Loader from "./Loader";
import { requestProductList } from "../store/action/productListAction";
import { useDispatch, useSelector } from "react-redux";
const ProductList = () => {
	const listStore = useSelector((store) => store.listStore);
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const params = useParams();
	const history = useHistory();

	useEffect(() => {
		dispatch(requestProductList());
		setIsLoaded(true);
	}, [dispatch]);

	const getDetials = (id) => {
		history.push(`/Details/${id}`);
	};
	const base_URL = "http://192.168.57.19:8080/products";
	return (
		<>
			<h1>Product List</h1>
			<div>
				<div>{!isLoaded && <Loader />}</div>
				{listStore.productList.map((p) => {
					return (
						<div>
							<img src={base_URL + p.image} style={{ width: "100px" }}></img>
							<p>{p.title}</p>
							<button onClick={() => getDetials(p._id)}>See Details</button>
						</div>
					);
				})}
			</div>
		</>
	);
};
export default ProductList;
