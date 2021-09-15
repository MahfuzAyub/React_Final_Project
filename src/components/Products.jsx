import styled from "styled-components";
import Product from "./Product";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import Loader from "../pages/Loader";
import { requestProductList } from "../store/action/productListAction";
import { requestCategorytList } from "../store/action/category/catListAction";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Products = () => {
	const listStore = useSelector((store) => store.listStore);
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const params = useParams();
	const history = useHistory();

	useEffect(() => {
		dispatch(requestProductList());
		dispatch(requestCategorytList());
		setIsLoaded(true);
	}, [dispatch]);

	const getDetials = (id) => {
		history.push(`/Details/${id}`);
	};
	return (
		<Container>
			<div>{!isLoaded && <Loader />}</div>
			{listStore.productList.map((item) => {
				return (
					<Product item={item} key={item.id} />
					// <div>
					// 	<img src={"http://192.168.57.19:8080/products" + p.image} style={{ width: "100px" }}></img>
					// 	<p>{p.title}</p>
					// 	<button onClick={() => getDetials(p._id)}>See Details</button>
					// </div>
				);
			})}
		</Container>
	);
};
export default Products;
