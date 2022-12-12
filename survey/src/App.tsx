import React from 'react'
import {Routes,Route} from 'react-router-dom';
import AuthPage from './components/Auth/Auth.page';
import {QueryClient,QueryClientProvider as QueryClientProviderCore} from "react-query";
import {QueryClientProviderProps} from "./Interfaces/ReactQueryInterface";
import {Protected,ProtectedAuthPage} from "./ProtectedRoutes/ProtectedRoutes";
import FeedPage from "./components/Feed/Feed.page";

const client = new QueryClient();
const QueryClientProvider: React.FC<QueryClientProviderProps> = QueryClientProviderCore

const App: React.FC<any> = () => {
  return (
    <>
        <QueryClientProvider client={client}>
      <Routes>
        <Route path={"/"} element={<Protected><FeedPage /></Protected>} />
        <Route path="/login-register-view" element={<ProtectedAuthPage><AuthPage /></ProtectedAuthPage>}/>
      </Routes>
        </QueryClientProvider>
    </>
  )
}

export default App