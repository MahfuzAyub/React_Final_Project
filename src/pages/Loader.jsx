import React, { useEffect, useState } from "react";
import index from "../image/index.gif";

const Loader = () => {
	return (
		<>
			{
				<div>
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
						<img src={index} alt="logo" />
					</div>
				</div>
			}
		</>
	);
};
export default Loader;
