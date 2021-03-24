import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../helpers/protectedRoute';
import {
    ProfilePageContentWrapper,
    ProfilePageWrapper,
    SideMenu,
    SideMenuWrapper,
} from './Profile.styles';
import PropTypes from 'prop-types';
import SideMenuItems from '../../components/SideMenuItems/SideMenuItems.component';

// check if a user is authenticated

const Profile = (props) => {
    const history = useHistory();

    // Redirect if not logged in
    useEffect(() => {
        if (!isAuthenticated()) history.push('/');
    }, [history]);

    return (
        <ProfilePageWrapper>
            <SideMenuWrapper>
                <SideMenu menuActive={props.showMenu}>
                    <SideMenuItems />
                </SideMenu>
            </SideMenuWrapper>
            <ProfilePageContentWrapper>
                The profile router
            </ProfilePageContentWrapper>
        </ProfilePageWrapper>
    );
};

Profile.propTypes = {
    showMenu: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
    return {
        showMenu: state.ui.showSideMenu,
    };
};

export default connect(mapStateToProps)(Profile);
