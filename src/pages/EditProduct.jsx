import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import {
	requestProductDetails,
	requestProductEdit,
} from "../store/action/prodDetailAction";
import { useDispatch, useSelector } from "react-redux";
import ImageUploads from "../components/imageUpload";
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
	const token = useSelector((store) => store.authStore.token);
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
				<div>
					<input type="file" name="file_upload" onChange={onFileChange} />
				</div>

				<div>
					<button onClick={() => callUpdateApi(id)}>Update</button>
				</div>
			</div>
		</>
	);
};
export default EditProduct;
