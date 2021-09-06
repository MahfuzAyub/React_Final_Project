import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { requestProductAdd } from "../store/action/productAddAction";
import { imageToBase64 } from "../utils/imageToBase64";
const AddProduct = () => {
	const [product, setProudcts] = useState({
		title: "",
		price: 0,
		description: "",
		image: null,
		stock: 0,
		category_id: "",
	});
	var image64 = null;
	const dispatch = useDispatch();
	const history = useHistory();
	const AddProduct = (e, key) => {
		setProudcts({ ...product, [key]: e.target.value });
	};
	const onFileChange = async (e) => {
		console.log(e.target.files[0]);
		image64 = await imageToBase64(e.target.files[0]);
		console.log(image64, "image64");
		setProudcts(product && { ...product, image: image64 });
		console.log(product, "product");
	};
	const callAddProductApi = () => {
		dispatch(requestProductAdd(product, token));
		history.push("/");
	};
	const token = useSelector((store) => store.authStore.token);
	return (
		<>
			<div>
				<p>Name</p>
				<input onChange={(e) => AddProduct(e, "title")} />
				<p>Description</p>
				<input onChange={(e) => AddProduct(e, "description")} />
				<p>Price</p>
				<input onChange={(e) => AddProduct(e, "price")} />
				<p>Category</p>
				<input onChange={(e) => AddProduct(e, "category_id")} />
				<p>Stock</p>
				<input onChange={(e) => AddProduct(e, "stock")} />
				<p>Image</p>
				<div>
					<input type="file" name="file_upload" onChange={onFileChange} />
				</div>
				<div>
					<button onClick={callAddProductApi}>Add Product</button>
				</div>
			</div>
		</>
	);
};
export default AddProduct;
