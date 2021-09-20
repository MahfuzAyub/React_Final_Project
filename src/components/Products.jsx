import styled from "styled-components";
import Product from "./Product";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import Loader from "../pages/Loader";
import { requestProductList } from "../store/action/productListAction";
import { requestCategorytList } from "../store/action/category/catListAction";
import { RequestCartList } from "../store/action/cartAction";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;

`;

const Products = () => {
	const listStore = useSelector((store) => store.listStore);
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const params = useParams();
	const history = useHistory();
	const token = useSelector((store) => store.authStore?.token?.token);

	useEffect(() => {
		dispatch(requestProductList());
		dispatch(requestCategorytList());

	//	dispatch(RequestCartList(token));
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
				);
			})}
		</Container>
	);
};
export default Products;
