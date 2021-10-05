import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import {
	requestProductDetails,
	requestProductEdit,
} from "../store/action/prodDetailAction";
import { useDispatch, useSelector } from "react-redux";
import { imageToBase64 } from "../utils/imageToBase64";

const EditProduct = () => {
	const [product, setProudct] = useState();
	const { id } = useParams();
	console.log(id, "idparams");
	const history = useHistory();
	const dispatch = useDispatch();

	const editProd = (e, key) => {
		setProudct(product && { ...product, [key]: e.target.value });
		console.log(e.target.value, "target");
	};
	var image64 = null;
	const curProductStore = useSelector(
		(store) => store.detailStore.currentProduct
	);
	const token = useSelector((store) => store.authStore.token.token);
	const callUpdateApi = (id) => {
		dispatch(requestProductEdit(id, product, token));
		history.push("/");
	};
	useEffect(() => {
		dispatch(requestProductDetails(id));
		setProudct(curProductStore);
	}, [dispatch]);
	const onFileChange = async (e) => {
		console.log(e.target.files[0]);
		image64 = await imageToBase64(e.target.files[0]);
		//console.log(image64, "image64");
		setProudct(product && { ...product, image: image64 });
		console.log(product, "product");
	};

	return (
		<>
			<div class="container">
				<p>Name</p>
				<input
					class="Input"
					value={product?.title}
					onChange={(e) => editProd(e, "title")}
				/>
				<p>Description</p>
				<input
					class="Input"
					class="Input"
					value={product?.description}
					onChange={(e) => editProd(e, "description")}
				/>
				<p>Price</p>
				<input
					class="Input"
					value={product?.price}
					onChange={(e) => editProd(e, "price")}
				/>
				{/* <p>Category</p>
				<input
					class="Input"
					value={product?.category.name}
					onChange={(e) => editProd(e, "category")}
				/> */}
				<p>Stock</p>
				<input
					class="Input"
					value={product?.stock}
					onChange={(e) => editProd(e, "stock")}
				/>
				<p>Image</p>
				<div>
					<input
						class="file_upload"
						type="file"
						name="file_upload"
						onChange={onFileChange}
					/>
				</div>

				<div>
					<button class="Button" onClick={() => callUpdateApi(id)}>
						Update
					</button>
				</div>
			</div>
		</>
	);
};
export default EditProduct;
