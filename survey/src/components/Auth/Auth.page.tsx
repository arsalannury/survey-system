import React, {useState} from 'react';
import {Grid} from '@mui/material';
import RegisterForm from './Register/RegisterForm';
import AuthWaveUi from './AuthWaveUi';
import LoginForm from "./Login/LoginForm";
import {showAuthComp} from "../../Types/showAuthCompTypes";


const AuthPage: React.FC<any> = () => {
    const [changeAuthComponent, setChangeAuthComponent] = useState<string>("show-register");

    const handleShowAuthChange = (state: string): void => {
        setChangeAuthComponent(state)
    }

    const handleShowAuthComponent = (): showAuthComp => {
        if (changeAuthComponent === "show-register") {
            return <RegisterForm handleShowAuthChange={handleShowAuthChange}/>
        }
        return <LoginForm handleShowAuthChange={handleShowAuthChange}/>
    }


    return (
        <>
            <Grid container alignItems={'center'} justifyContent={'space-between'}>
                <Grid height={'100vh'} item xs={12} sm={12} md={6} lg={6}>
                    {handleShowAuthComponent()}
                </Grid>
                <Grid
                    height={'100vh'}
                    alignSelf={'flex-start'}
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                >
                    <AuthWaveUi/>
                </Grid>
            </Grid>
        </>
    );
};

export default AuthPage;
