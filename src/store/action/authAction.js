import { actionType } from "../actionTypes";
import axios from "axios";

export const setLogin_Action = (token) => ({
    type: actionType.setLogin,
    payload: token
});

export const requestSigninAPI = (user) => {
    return (dispatch) => {
        const response =
            axios
                .post("http://localhost:8080/signin", {
                    email: user.enail,
                    password: user.password,// "admin@admin",
                })
                .then((response) => {
                    dispatch(setLogin_Action(response.data?.userInfo));
                    console.log(response.data, "res");
                })
                .catch((error) => {
                    console.log(error, "err");
                });
        console.log(response.data, "requestSigninAPI")

    }
}
export const requestSignupAPI = (user) => {
    return (dispatch) => {
        const response =
            axios
                .post("http://localhost:8080/signup", {
                    email: user.enail,
                    username: user.username,
                    password: user.password,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    address: {
                        city: user.city,
                        street: user.street,
                        number: "Address",
                        zipcode: "Address",
                        geolocation: {
                            lat: "AT",
                            long: "LONG"
                        }
                    },
                    phone: user.phone
                })
                .then((response) => {
                    dispatch(setLogin_Action(response.data?.userInfo));
                    console.log(response.data, "res");
                })
                .catch((error) => {
                    console.log(error, "err");
                });
        console.log(response.data, "requestSign uP API")

    }
}
export const setLogOut_Action = () => ({
    type: actionType.setLogOut,
    payload: null
});