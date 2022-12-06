import {QueryClient} from "react-query/core";
import React from "react";

export interface QueryClientProviderProps {
    client: QueryClient;
    contextSharing?: boolean;
    children: React.ReactNode | JSX.Element[]
}