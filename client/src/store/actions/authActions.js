import * as actionTypes from '../actionTypes';
import { toast } from 'react-toastify';
import { apiUrl } from '../../helpers/ApiCalls';

export const login = (email, password) => {
    return async (dispatch) => {
        try {
            let user = {
                email,
                password,
            };

            let response = await fetch(`${apiUrl}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            const data = await response.json();

            if (response.status < 400) {
                dispatch({
                    type: actionTypes.LOGIN_SUCCESS,
                    token: data.token,
                    user: data.user,
                });

                // Store credentials in local storage
                localStorage.setItem('MyMenuToken', data.token);
                localStorage.setItem('User', JSON.stringify(data.user));

                // display a message to the user
                toast.success('Logged in successfully');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error('Failed to log in, please try again later.');
        }
    };
};

export const register = (email, password) => {
    return async (dispatch) => {
        try {
            let user = { email, password };
            let response = await fetch(
                `${apiUrl}/auth/register`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                }
            );

            const data = await response.json();

            if (response.status < 400) {
                dispatch({
                    type: actionTypes.REGISTER_SUCCESS,
                });
                toast.success('Registered successfully, logging in...');
                return true;
            } else {
                toast.error(data.message);
                return null;
            }
        } catch (error) {
            toast.error('Failed to Register, please try again later.');
            return null;
        }
    };
};
