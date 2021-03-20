import { useState } from 'react';
import LoginForm from '../../components/Forms/LoginForm/LoginForm.component';
import { AuthenticatePage, PageCard } from './Authenticate.styles';

const Authenticate = () => {
    const [formType, setFormType] = useState('login');
    return (
        <AuthenticatePage>
            <PageCard>{formType === 'login' && <LoginForm />}</PageCard>
        </AuthenticatePage>
    );
};

export default Authenticate;
