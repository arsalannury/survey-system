import React, {createContext, useContext} from "react";

type Children = {
    children: React.ReactNode;
};


const AuthContext = createContext({
});

export default function useRegisterContext() {
    return useContext(AuthContext);
}

export const RegisterContextProvider = ({children}: Children) => {

  

    return (
        <AuthContext.Provider
            value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

