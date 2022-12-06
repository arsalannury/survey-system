import React from 'react'
import {Routes,Route} from 'react-router-dom';
import RegisterPage from './components/Auth/Register/Register.page';
import {QueryClient,QueryClientProvider as QueryClientProviderCore} from "react-query";
import {QueryClientProviderProps} from "./Interfaces/ReactQueryInterface";

const client = new QueryClient();
const QueryClientProvider: React.FC<QueryClientProviderProps> = QueryClientProviderCore

const App: React.FC<any> = () => {
  return (
    <>
        <QueryClientProvider client={client}>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
      </Routes>
        </QueryClientProvider>
    </>
  )
}

export default App