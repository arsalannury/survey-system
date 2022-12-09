import React, {createContext, useContext} from "react";
import {useMutation} from "react-query";
type Children = {
    children: React.ReactNode;
};


const RegisterContext = createContext({

});

export default function useRegisterContext() {
    return useContext(RegisterContext);
}

export const RegisterContextProvider = ({children}: Children) => {

    return (
        <RegisterContext.Provider
            value={{}}>
            {children}
        </RegisterContext.Provider>
    )
}

