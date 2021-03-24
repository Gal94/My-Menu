import { useHistory } from 'react-router-dom';
import AuthForm from '../../components/Forms/LoginForm/AuthForm.component';
import { AuthenticatePage, PageCard } from './Authenticate.styles';

const Authenticate = (props) => {
    const history = useHistory();
    return (
        <AuthenticatePage>
            <PageCard>
                {history.location.pathname === '/login' && (
                    <AuthForm formType='login' />
                )}
                {history.location.pathname === '/register' && (
                    <AuthForm formType='register' />
                )}
            </PageCard>
        </AuthenticatePage>
    );
};

export default Authenticate;
