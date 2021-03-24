import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../helpers/protectedRoute';
import { ProfilePageWrapper, SideMenu } from './Profile.styles';
import PropTypes from 'prop-types';

// check if a user is authenticated

const Profile = (props) => {
    const history = useHistory();

    // Redirect if not logged in
    useEffect(() => {
        if (!isAuthenticated()) history.push('/');
    }, [history]);

    return (
        <ProfilePageWrapper>
            Profile page
            <SideMenu menuActive={props.showMenu}>Side menu items</SideMenu>
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
