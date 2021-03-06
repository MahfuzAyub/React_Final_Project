import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { requestProductDelete } from "../store/action/prodDetailAction";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../components/Product";

const DeleteProduct = () => {
	const [product, setProudct] = useState();

	const editProduct = (e, key) => {
		setProudct(product && { ...product, [key]: e.target.value });
	//	console.log(e.target.value, "target");
	};
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	
	const token = useSelector((store) => store.authStore.token.token);
	const callDeleteApi = (id,t) => {
			console.log( "called");
		dispatch(requestProductDelete(id,t));
		history.push("/");
	};
	useEffect(() => {
	}, []);

	return (
		<Container>
			
				<h1>Sure to Delete The Product ??</h1>

				<div>
					<button onClick={() => callDeleteApi(id, token)}>Delete</button>
				</div>
			
		</Container>
	);
};
export default DeleteProduct;
