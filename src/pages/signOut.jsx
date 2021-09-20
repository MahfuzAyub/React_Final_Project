import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { requestProductDelete } from "../store/action/prodDetailAction";
import { useDispatch, useSelector } from "react-redux";
import { requestSigninAPI, setLogOut_Action } from "../store/action/authAction";

const SignOut = () => {
	const [product, setProudct] = useState();
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();

	const token = useSelector((store) => store.authStore.token?.token);

	useEffect(() => {}, []);

	const SignOut = () => {
		dispatch(setLogOut_Action());
		//setIsLoaded(true);
	};
	return (
		<>
			<div>
				<h1>Sure to Log Out ??</h1>

				<div>
					<button onClick={() => SignOut()}>Sign Out??</button>
				</div>
			</div>
		</>
	);
};
export default SignOut;
