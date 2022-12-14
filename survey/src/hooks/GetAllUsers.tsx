import {useQuery, UseQueryResult} from "react-query";
import {BaseUrlAuth} from "../Axios/BaseUrlAuth";

const GetAllUsers = (): Promise<any> => {
    return BaseUrlAuth.get("/register-login.json");
}

export const useGetAllUsers = (): UseQueryResult => {
    return useQuery("all-users", GetAllUsers, {
        staleTime: 100000,
        cacheTime: 100000
    })
}

