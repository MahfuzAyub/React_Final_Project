import styled from "styled-components";
import Product from "./Product";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import Loader from "../pages/Loader";
import { requestProductList } from "../store/action/productListAction";
import { requestCategorytList } from "../store/action/category/catListAction";
import { RequestCartList } from "../store/action/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "@material-ui/icons";
const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
`;
const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
`;
const Left = styled.div`
	margin-left: 1550px;
	align-items: center;
	width: 250px;
`;
const Products = () => {
	const listStore = useSelector((store) => store.listStore);
	const [searchTerm, setSearchTerm] = React.useState("");

	const [searchResults, setSearchResults] = React.useState(listStore.productList);
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const params = useParams();
	const history = useHistory();
	const token = useSelector((store) => store.authStore?.token?.token);

	useEffect(() => {
		dispatch(requestProductList());
		dispatch(requestCategorytList());
		setIsLoaded(true);
	const results = listStore.productList.filter((item) => {
		item.title.toLowerCase().includes(searchTerm);
	});
	setSearchResults(results);
		
	}, [dispatch]);

	const getDetials = (id) => {
		history.push(`/Details/${id}`);
	};

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	
	};
	return (
		<>
			<Left>
				<SearchContainer>
					<Input placeholder="Search" onChange={handleChange} />
					<Search style={{ color: "gray", fontSize: 16 }} />
				</SearchContainer>
			</Left>
			<Container>
				<div>{!isLoaded && <Loader />}</div>
				{listStore.productList.map((item) => {
					return <Product item={item} key={item.id} />;
				})}
			</Container>
		</>
	);
};
export default Products;
