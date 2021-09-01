import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import {
	requestProductDetails,
	requestProductEdit,
} from "../store/action/prodDetailAction";
import { useDispatch, useSelector } from "react-redux";

const EditProduct = () => {
	const [product, setProudct] = useState();
	const editProd = (e, key) => {
		setProudct(product && { ...product, [key]: e.target.value });
		console.log(e.target.value, "target");
	};
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();

	const curProductStore = useSelector(
		(store) => store.detailStore.currentProduct
	);
	const callUpdateApi = (id,product) => {
		dispatch(requestProductEdit(id,product));
		history.push("/");
	};
	useEffect(() => {
		dispatch(requestProductDetails(id));
		setProudct(curProductStore);
		console.log(product, "cpp");
	}, [dispatch]);

	return (
		<>
			<div>
				<p>Name</p>
				<input value={product?.title} onChange={(e) => editProd(e, "title")} />
				<p>Description</p>
				<input
					value={product?.description}
					onChange={(e) => editProd(e, "description")}
				/>
				<p>Price</p>
				<input value={product?.price} onChange={(e) => editProd(e, "price")} />
				<p>Category</p>
				<input
					value={product?.category.name}
					onChange={(e) => editProd(e, "category")}
				/>
				<p>Stock</p>
				<input value={product?.stock} onChange={(e) => editProd(e, "stock")} />
				<p>Image</p>
				<input value={product?.image} onChange={(e) => editProd(e, "image")} />
				<div>
					<button onClick={callUpdateApi}>Update</button>
				</div>
			</div>
		</>
	);
};
export default EditProduct;
