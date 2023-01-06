import { Navigate } from 'react-router-dom';
import { ReactElement, useEffect } from 'react';
import { supabase } from '../helper/supabaseClient';

type Children = {
  children: ReactElement;
};

export const Protected = ({ children }: Children) => {
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        localStorage.setItem(
          'survey-token-saved-local-storage-register-login-user',
          session?.access_token!
        );
      }
      console.log(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(_event);
      if (session) {
        localStorage.setItem(
          'survey-token-saved-local-storage-register-login-user',
          session?.access_token!
        );
      }
    });
  }, []);
  const isAuth = localStorage.getItem(
    'survey-token-saved-local-storage-register-login-user'
  );
  return isAuth ? children : <Navigate to="/login-register-view" />;
};

export const ProtectedAuthPage = ({ children }: Children) => {
  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     if (session) {
  //       localStorage.setItem(
  //         'survey-token-saved-local-storage-register-login-user',
  //         session?.access_token!
  //       );
  //     }
  //     console.log(session);
  //   });

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     if (session) {
  //       localStorage.setItem(
  //         'survey-token-saved-local-storage-register-login-user',
  //         session?.access_token!
  //       );
  //     }
  //   });
  // }, []);

  const isAuth = localStorage.getItem(
    'survey-token-saved-local-storage-register-login-user'
  );
  return isAuth ? <Navigate to="/" /> : children;
};
