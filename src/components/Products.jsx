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
const Ctg = styled.div`
	margin-left: 50px;
	align-items: center;
	width: 250px;
`;
const Products = () => {
	const listStore = useSelector((store) => store.listStore);
	const [allData, setAllData] = useState([]);
	const [filteredData, setFilteredData] = useState(allData);
	const [filteredCtgData, setFilteredCtgData] = useState(allData);

	const [searchTerm, setSearchTerm] = React.useState("");

	const [searchResults, setSearchResults] = React.useState(
		listStore.productList
	);
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const params = useParams();
	const history = useHistory();
	const token = useSelector((store) => store.authStore?.token?.token);
	const categories = useSelector((store) => store.categoryStore.List);
	const [product, setProudcts] = useState({
		title: "",
		price: 0,
		description: "",
		image: null,
		stock: 0,
		category_id: "",
	});

	useEffect(() => {
		dispatch(requestProductList());
		dispatch(requestCategorytList());
		setIsLoaded(true);

		setAllData(listStore.productList);
		setFilteredData(listStore.productList);

		//setSearchResults(results);
	}, [dispatch]);

	const getDetials = (id) => {
		history.push(`/Details/${id}`);
	};
	const setCatId = (e) => {
		setAllData(listStore.productList);

		setSearchTerm(" ");
		var value = e.target.value;
		console.log(value, "val");
		if (value != 0) {
			let result = [];
			result = allData.filter((data) => {
				return data.category._id === value; //!= -1;
			});
			setFilteredData(result);
		} else {
			let result = [];
			result = allData;
			setFilteredData(result);
		}
	};
	const handleSearch = (event) => {
		setAllData(listStore.productList);
		setSearchTerm(event.target.value);
		console.log(searchTerm, "serachterrm");

		let value = event.target.value.toLowerCase();
		let result = [];
		result = allData.filter((data) => {
			return data.title.toLowerCase().search(value) != -1;
		});
		setFilteredData(result);
	};
	return (
		<>
			<Ctg>
				<select defaultValue="" onChange={(e) => setCatId(e)}>
					<option key={0} value="0">
						---Find By Category---
					</option>
					{categories.map((cat, index) => (
						<option key={index} value={cat._id}>
							{cat.name}
						</option>
					))}
				</select>
			</Ctg>
			<Left>
				<SearchContainer>
					<Input
						placeholder="Search"
						onChange={(event) => handleSearch(event)}
					/>
					<Search style={{ color: "gray", fontSize: 16 }} />
				</SearchContainer>
			</Left>
			<Container>
				<div>{!isLoaded && <Loader />}</div>
				{searchTerm != "" && (
					<>
						{filteredData.map((item) => {
							return <Product item={item} key={item.id} />;
						})}
					</>
				)}
				{searchTerm == "" &&
					listStore.productList.map((item) => {
						return <Product item={item} key={item.id} />;
					})}
			</Container>
		</>
	);
};
export default Products;
