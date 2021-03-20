// TODO : Forgot password link

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { login } from '../../../store/actions/authActions';
import {
    Form,
    FormInput,
    LoginPageWrapper,
    SignInForm,
    StyledFormButton,
    StyledH1,
} from './LoginForm.styles';

const LoginForm = (props) => {
    const [fields, setFields] = useState({
        email: '',
        password: '',
    });

    const History = useHistory();

    // Redirect in case user is logged in
    useEffect(() => {
        localStorage.getItem('MyMenuToken') && History.push('/');
    }, []);

    const inputChangeHandler = (event) => {
        const newFields = { ...fields };
        newFields[event.target.name] = event.target.value;
        setFields(newFields);
    };

    // Validate email and password fields
    const validateLoginForm = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(fields.email).toLowerCase().trim())) {
            toast.error('Please provide a valid email.');
            return false;
        } else if (fields.password.length < 6 || fields.password.length > 14) {
            toast.error('Please provide a password between 6-14 characters.');
            return false;
        }
        return true;
    };

    // Submit form and return to homepage upon logging in
    const onSubmitForm = async (e) => {
        e.preventDefault();
        if (!validateLoginForm()) {
            return;
        }

        // dispatch a login request
        await props.onLogin(fields.email, fields.password);
        if (localStorage.getItem('MyMenuToken')) {
            History.goBack();
        }
    };

    return (
        <LoginPageWrapper>
            <SignInForm>
                <Form onSubmit={onSubmitForm}>
                    <StyledH1>Sign in</StyledH1>
                    <FormInput
                        value={fields.email}
                        type='email'
                        name='email'
                        placeholder='Email'
                        onChange={inputChangeHandler}
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={fields.password}
                        placeholder='Password'
                        onChange={inputChangeHandler}
                    />
                    <p>Forgot your password?</p>
                    <StyledFormButton>sign in</StyledFormButton>
                </Form>
            </SignInForm>
        </LoginPageWrapper>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => dispatch(login(email, password)),
    };
};

export default connect(null, mapDispatchToProps)(LoginForm);
