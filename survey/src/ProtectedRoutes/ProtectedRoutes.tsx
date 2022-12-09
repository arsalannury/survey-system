import {Navigate} from "react-router-dom";
import React, {ReactElement} from "react";

type Children = {
    children: ReactElement;
};

export const Protected = ({children}: Children) => {
    const isAuth = localStorage.getItem("survey-token-saved-local-storage-register-login-user");
    return isAuth ? children : <Navigate to="/login-register-view"/>;
}
