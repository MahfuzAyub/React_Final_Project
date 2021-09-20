import React, { useEffect, useState } from "react";
import index from "../image/index.gif";
import { Container } from "../components/Product";
const Loader = () => {
	return (
		<>
			{
				<Container>
					<p>.... loading.....</p>
					<div
						style={{
							position: "relative",
							left: "50 px",
							top: "50 px",
							width: "100%",
							height: "100%",
							zIndex: "9999",
							background: { index },
						}}>
						<img style={{ justifyContent:"center"}} src={index} alt="logo" />
					</div>
				</Container>
			}
		</>
	);
};
export default Loader;
