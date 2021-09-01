import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
const AddProduct = () => {
	const [product, setProduct] = useState({
		name: "",
		description: "",
		price: "",
		category: "",
		image: "",
	});
	const history = useHistory();
	const AddProduct = (e, key) => {
		setProduct({ ...product, [key]: e.target.value });
	};
	const callAddProductApi = () => {
		axios
			.post("https://fakestoreapi.com/products", {
				name: product.name,
				description: product.description,
				price: product.price,
				category: product.category,
				image: product.image,
			})
			.then((response) => {
				history.push("/");
			})
			.catch((error) => {
			});
	};
	return (
		<>
			<div>
				<p>Name</p>
				<input onChange={(e) => AddProduct(e, "name")} />
				<p>Description</p>
				<input onChange={(e) => AddProduct(e, "description")} />
				<p>Price</p>
				<input onChange={(e) => AddProduct(e, "price")} />
				<p>Category</p>
				<input onChange={(e) => AddProduct(e, "category")} />
				<p>Image</p>
				<input onChange={(e) => AddProduct(e, "image")} />
				<div>
					<button onClick={callAddProductApi}>Add Product</button>
				</div>
			</div>
		</>
	);
};
export default AddProduct;
