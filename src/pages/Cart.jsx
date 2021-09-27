import React, { useEffect, useState } from "react";
import { Add, Remove,Delete } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { RequestCartList } from "../store/action/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { requestAddCartAPI } from "../store/action/cartAction";
import { RequestCheckoutApi } from "../store/action/cartAction";
import { useHistory } from "react-router-dom";

const Container = styled.div`
	align-items: center;

	padding: 5px;
`;

const Wrapper = styled.div`
	padding: 20px;
	flex-wrap: wrap;
	${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === "filled" && "none"};
	background-color: ${(props) =>
		props.type === "filled" ? "black" : "transparent"};
	color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
	${mobile({ display: "none" })}
`;
const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	flex: 3;
	flex-direction: column;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: center;
	${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
	flex: 2;
`;

const Product = styled.div`
	width: 250px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
	flex: 2;
	flex-direction: column;
	display: flex;
`;

const Image = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 10%;
`;

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
	display: flex;
	font-size: 30px;
	font-weight: 200;
	${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid red;
	border-radius: 5px;
	padding: 30px;
	height: 50vh;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
`;

const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
`;

const Cart = () => {
	const tokens = useSelector((store) => store.authStore.token?.token);
	const cartlist = useSelector((store) => store.cartStore.cart);
	const dispatch = useDispatch();
	const base_URL = "http://192.168.57.19:8080/products";
  const hisory = useHistory();
	const token = useSelector((store) => store.authStore.token?.token);
	const carts = useSelector((store) => store.cartStore.cart?.products);

  useEffect(() => {
    if (cartlist == []) {
      alert("Your cart is Empty!!!")
    }
		dispatch(RequestCartList(tokens));
		console.log(tokens, "ererer");
	}, [dispatch]);
	const addToCart = (id, token, action) => {
		const item = carts.find((item) => item.productId?._id == id);

		// calc quantity
		let quantity = null;
		if (action == "add") {
			quantity = !item ? 1 : item.quantity + 1;
		}
		if (action == "remove") {
			if (item?.quantity > 0) quantity = item?.quantity - 1;
		}
		if (action == "delete") {
			quantity =0;
		}

		dispatch(requestAddCartAPI(id, token, quantity));
	};

	const totalPrice = () => {
		if (carts && carts.length > 0) {
			const sum = carts.reduce((acc, { productId, quantity }) => {
				return acc + productId.price * quantity;
			}, 0);

			return sum.toFixed(2);
		} else return 0;
  };
  const Checkout = () => {
		//RequestCheckoutApi
		dispatch(RequestCheckoutApi( token));
	};
  return (
		<Container>
			{/* <Navbar />
	    <Announcement /> */}
			{cartlist?.status != "error" ? (
				<Wrapper>
					<Title>YOUR BAG</Title>
					{/* <Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Shopping Bag(2)</TopText>
					</TopTexts>
				</Top> */}
					<Bottom>
						<>
							{cartlist.products?.map((p) => {
								return (
									<Info>
										<Product>
											<ProductDetail>
												<Image src={base_URL + p?.productId?.image} />
												<Details>
													<ProductName>
														<b>Product:</b>
														{p.productId?.title}
													</ProductName>
													<ProductId>
														<b>ID:</b> {p._id}
														<br />
														<b>Price:</b> ${p.productId?.price}
													</ProductId>
													<ProductAmountContainer>
														<Remove
															onClick={() =>
																addToCart(p.productId?._id, token, "remove")
															}
														/>
														<ProductAmount>{p.quantity}</ProductAmount>
														<Add
															onClick={() =>
																addToCart(p.productId?._id, token, "add")
															}
														/>
														<Delete
															onClick={() =>
																addToCart(p.productId?._id, token, "delete")
															}
														/>
													</ProductAmountContainer>
												</Details>
											</ProductDetail>
										</Product>
									</Info>
								);
							})}
						</>
						<Summary>
							<SummaryTitle>ORDER SUMMARY</SummaryTitle>
							<SummaryItem>
								<SummaryItemText>Subtotal</SummaryItemText>
								<SummaryItemPrice>${totalPrice()}</SummaryItemPrice>
							</SummaryItem>
							{/* <SummaryItem>
								<SummaryItemText>Estimated Shipping</SummaryItemText>
								<SummaryItemPrice>$ 5.90</SummaryItemPrice>
							</SummaryItem> */}
							<SummaryItem>
								<SummaryItemText>Shipping Discount</SummaryItemText>
								<SummaryItemPrice>$ -0.0</SummaryItemPrice>
							</SummaryItem>
							<SummaryItem type="total">
								<SummaryItemText>Total</SummaryItemText>
								<SummaryItemPrice>${totalPrice()}</SummaryItemPrice>
							</SummaryItem>
							<Button onClick={() => Checkout(token)}>CHECKOUT NOW</Button>
						</Summary>
					</Bottom>
				</Wrapper>
			) : (
				<Wrapper>
					  <h1 style={{ color: 'red'}}>Your Cart is empty! Please Add some Items !!!</h1>
				</Wrapper>
			)}
		</Container>
	);
};
// 	return (
// 		<div>
// 			{cartlist.products?.map((p) => {
// 				return (
// 					<div>
// 						<img
// 							src={base_URL + p.productId.image}
// 							style={{ width: "100px" }}></img>
// 						<p>{p.productId.title}</p>
// 						{/* <button onClick={() => getDetials(p._id)}>See Details</button> */}
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// };

export default Cart;
