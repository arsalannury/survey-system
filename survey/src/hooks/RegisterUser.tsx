import { useMutation } from 'react-query';
import { supabase } from '../helper/supabaseClient';
import { UserDataInterface } from '../Interfaces/UserDataInterface';
import { ErrorToastHandler } from '../components/Toasts/ReactToastify';

const addUserToDatabase = async (userData: UserDataInterface) => {
  const { data, error: FetchError } = await supabase
    .from('login-register')
    .select('*')
    .eq('userName', userData.username);

    if (FetchError) {
      throw new Error(FetchError.message);
    }

  if (data?.length! > 0) {
    ErrorToastHandler('User with this username exists');
    return;
  }

  // await supabase.auth.signUp({
  //   email: userData.email,
  //   password: userData.password
  // })

  const { error: PostError } = await supabase.from('login-register').insert([
    {
      firstName: userData.firstName,
      lastName: userData.lastName,
      userName: userData.username,
      email: userData.email,
      password: userData.password,
      user_id: userData.user_id
    },
  ]);

  if (PostError) {
    throw new Error(PostError.message);
  }
};

export const useAddUserToDatabase = (): any => {
  return useMutation(addUserToDatabase);
};
