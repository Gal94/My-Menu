import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../../../components/Spinner/Spinner.component';
import {
    ProfileInfoWrapper,
    ProfileInfoFormContainer,
    ProfileInfoMenusContainer,
    ProfileInfoTitle,
    ProfileInfoDescContainer,
    ProfileInfoDescText,
    ProfileInfoIcon,
} from './ProfileInfo.styles';
import { updateUserInfo } from '../../../store/actions/profileActions';
import ProfileInfoForm from '../../../components/Forms/ProfileInfoForm/ProfileInfoForm.component';

const ProfileInfo = (props) => {
    const [showDesc, setShowDesc] = useState(false);
    console.log(props.userInfo);
    const getUser = async () => {
        // use cached data on redux if fetched before
        if (props.userInfo) {
            return;
        }

        try {
            const request = await fetch(
                'http://localhost:5000/api/profile/info',
                {
                    method: 'GET',
                    headers: {
                        Authorization:
                            'Bearer ' + localStorage.getItem('MyMenuToken'),
                    },
                }
            );

            if (request.status < 400) {
                const { user } = await request.json();
                props.onFetchedUser(user);
            } else {
                toast.error('Failed to get user data.');
            }
        } catch (err) {
            console.log(err);
            toast.error('Failed to get user data, please try again later.');
        }
    };

    useEffect(() => {
        getUser();
    }, [props.userInfo]);

    if (!props.userInfo) {
        return <Spinner />;
    } else {
        return (
            <ProfileInfoWrapper>
                <ProfileInfoTitle>
                    {props.userInfo.firstName}'s Info{' '}
                    <ProfileInfoIcon
                        onMouseEnter={() => setShowDesc(true)}
                        onMouseLeave={() => setShowDesc(false)}
                    >
                        i
                    </ProfileInfoIcon>
                </ProfileInfoTitle>
                <ProfileInfoDescContainer show={showDesc}>
                    <ProfileInfoDescText>
                        Here you can modify your information.
                    </ProfileInfoDescText>
                </ProfileInfoDescContainer>
                <ProfileInfoFormContainer>
                    <ProfileInfoForm user={props.userInfo} />
                </ProfileInfoFormContainer>
                <ProfileInfoMenusContainer>
                    menus container component (todo)
                </ProfileInfoMenusContainer>
            </ProfileInfoWrapper>
        );
    }
};

ProfileInfo.propTypes = {
    userInfo: PropTypes.object,
    onFetchedUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        userInfo: state.profile.userInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchedUser: (userInfo) => dispatch(updateUserInfo(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
