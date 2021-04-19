import { useEffect, Suspense, lazy } from 'react';
import { useHistory } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { isAuthenticated } from '../../helpers/protectedRoute';
import {
    ProfilePageContentWrapper,
    ProfilePageWrapper,
    SideMenu,
    SideMenuWrapper,
} from './Profile.styles';
import SideMenuItems from '../../components/SideMenuItems/SideMenuItems.component';
import ProfileInfo from './ProfileInfo/ProfileInfo.component';
import MacrosPage from './MacrosPage/MacrosPage.component';
import NewMenu from './NewMenu/NewMenu.component';
import NewMenuItem from '../../components/Forms/NewMenuItem/NewMenuItem.component';
import MenuItem from './NewMenu/MealTimeItems/MenuItem/MenuItem.component';

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
                <Switch>
                    <Route path='/profile/' exact>
                        <Redirect to='/profile/menu' />
                    </Route>
                    <Route path='/profile/info/' exact>
                        <Suspense fallback={<div></div>}>
                            <ProfileInfo />
                        </Suspense>
                    </Route>
                    <Route path='/profile/menu' exact>
                        <NewMenu />
                        <MenuItem />
                        <NewMenuItem />
                    </Route>
                    <Route path='/profile/macros/' exact>
                        <Suspense fallback={<div></div>}>
                            <MacrosPage />
                        </Suspense>
                    </Route>
                </Switch>
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
