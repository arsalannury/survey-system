import { Navigate } from 'react-router-dom';
import React, { ReactElement, useEffect, useState } from 'react';
import { supabase } from '../helper/supabaseClient';

type Children = {
  children: ReactElement;
};

export const Protected = ({ children }: Children) => {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      console.log(session);
      
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  const isAuth = localStorage.getItem(
    'survey-token-saved-local-storage-register-login-user'
  );
  return isAuth ? children : <Navigate to="/login-register-view" />;
};

export const ProtectedAuthPage = ({ children }: Children) => {
  const isAuth = localStorage.getItem(
    'survey-token-saved-local-storage-register-login-user'
  );
  return isAuth ? <Navigate to="/" /> : children;
};
