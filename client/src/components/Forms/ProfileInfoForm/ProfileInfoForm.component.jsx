import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';

import {
    ProfileFormButton,
    ProfileFormInput,
    ProfileFormLabel,
    ProfileInfoStyledForm,
} from './ProfileInfoForm.styles';
import { updateUserInfo } from '../../../store/actions/profileActions';

const ProfileInfoForm = (props) => {
    const [userInfoToEdit, setUserInfoToEdit] = useState({
        ...props.user,
        currentPassword: '',
        newPassword: '',
    });

    const inputChangeHandler = (event) => {
        const newFields = { ...userInfoToEdit };
        newFields[event.target.name] = event.target.value;
        setUserInfoToEdit(newFields);
    };

    // Form validator
    const validateForm = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(userInfoToEdit.email).toLowerCase().trim())) {
            toast.error('Please provide a valid email.');
            return false;
        } else if (
            (userInfoToEdit.currentPassword.length !== 0 ||
                userInfoToEdit.newPassword.length !== 0) &&
            (userInfoToEdit.currentPassword.length < 6 ||
                userInfoToEdit.currentPassword.length > 14 ||
                userInfoToEdit.newPassword.length < 6 ||
                userInfoToEdit.newPassword.length > 14)
        ) {
            toast.error('Please provide a password between 6-14 characters.');
            return false;
        } else if (!Number.isInteger(+userInfoToEdit.age)) {
            toast.error('Age must be a number');
            return false;
        }

        return true;
    };

    // Submit form to api
    const onFormSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }

        const response = await fetch('http://localhost:5000/api/profile/info', {
            method: 'put',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('MyMenuToken'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfoToEdit),
        });

        // Display error if api failed to update info
        if (response.status >= 400) {
            console.log('response');
            return toast.error('Failed to update info, please try again');
        }

        const { user } = await response.json();
        props.updateUser(user);
    };
    return (
        <ProfileInfoStyledForm onSubmit={onFormSubmit}>
            <div
                style={{
                    width: '50%',
                    display: 'inline-block',
                    margin: '4px 0',
                }}
            >
                <ProfileFormLabel htmlFor='firstName'>
                    First Name
                </ProfileFormLabel>
                <ProfileFormInput
                    name='firstName'
                    value={userInfoToEdit.firstName}
                    onChange={inputChangeHandler}
                />
            </div>
            <div
                style={{
                    width: '50%',
                    display: 'inline-block',
                    margin: '4px 0',
                }}
            >
                <ProfileFormLabel htmlFor='lastName'>LastName</ProfileFormLabel>
                <ProfileFormInput
                    name='lastName'
                    value={userInfoToEdit.lastName}
                    onChange={inputChangeHandler}
                />
            </div>
            <div
                style={{
                    width: '50%',
                    display: 'inline-block',
                    margin: '4px 0',
                }}
            >
                <ProfileFormLabel htmlFor='currentPassword'>
                    Current Password
                </ProfileFormLabel>
                <ProfileFormInput
                    name='currentPassword'
                    value={userInfoToEdit.currentPassword}
                    type='password'
                    placeholder='Current Password'
                    onChange={inputChangeHandler}
                />
            </div>
            <div
                style={{
                    width: '50%',
                    display: 'inline-block',
                    margin: '4px 0',
                }}
            >
                <ProfileFormLabel htmlFor='newPassword'>
                    New Password (6-14)
                </ProfileFormLabel>
                <ProfileFormInput
                    name='newPassword'
                    value={userInfoToEdit.newPassword}
                    placeholder='New Password'
                    type='password'
                    autoComplete='new-password'
                    onChange={inputChangeHandler}
                />
            </div>
            <div
                style={{
                    width: '50%',
                    display: 'inline-block',
                    margin: '4px 0',
                }}
            >
                <ProfileFormLabel htmlFor='email'>Email</ProfileFormLabel>
                <ProfileFormInput
                    name='email'
                    value={userInfoToEdit.email}
                    placeholder='Email'
                    type='email'
                    onChange={inputChangeHandler}
                />
            </div>
            <div
                style={{
                    width: '2rem',
                    display: 'inline-block',
                    margin: '4px 0',
                }}
            >
                <ProfileFormLabel htmlFor='age'>Age</ProfileFormLabel>
                <ProfileFormInput
                    name='age'
                    value={userInfoToEdit.age}
                    placeholder='Age'
                    onChange={inputChangeHandler}
                    type='text'
                />
            </div>
            <ProfileFormButton>Submit Changes</ProfileFormButton>
        </ProfileInfoStyledForm>
    );
};

ProfileInfoForm.propTypes = {
    user: PropTypes.object.isRequired,
    updateUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (userInfo) => dispatch(updateUserInfo(userInfo)),
    };
};

export default connect(null, mapDispatchToProps)(ProfileInfoForm);
