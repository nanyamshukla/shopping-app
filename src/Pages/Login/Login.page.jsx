import React from 'react';

import './Login.styles.scss';
import SignIn from '../../Components/SignIn/SignIn.component';
import SignUp from '../../Components/SignUp/SignUp.component';

const LoginPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default LoginPage;