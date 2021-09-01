import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { requestProductDelete } from "../store/action/prodDetailAction";
import { useDispatch, useSelector } from "react-redux";

const DeleteProduct = () => {
	const [product, setProudct] = useState();

	const editProduct = (e, key) => {
		setProudct(product && { ...product, [key]: e.target.value });
		console.log(e.target.value, "target");
	};
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	
	const callDeleteApi = () => {
		dispatch(requestProductDelete(id));
		history.push("/");
	};
	useEffect(() => {
	}, []);

	return (
		<>
			<div>
				<h1>Sure to Delete The Product ??</h1>

				<div>
					<button onClick={callDeleteApi}>Delete</button>
				</div>
			</div>
		</>
	);
};
export default DeleteProduct;
