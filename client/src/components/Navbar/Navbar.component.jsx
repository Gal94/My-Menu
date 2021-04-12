import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    NavbarContainer,
    NavbarItem,
    NavbarItems,
    NavbarLink,
} from './Navbar.styles';
import { LOGOUT } from '../../store/actionTypes';
import { closeSideMenu, toggleSideMenu } from '../../store/actions/UiActions';

const Navbar = (props) => {
    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        props.onLogout();
        history.push('/');
    };

    // * Add a new action to close side menu whenever a link is clicked

    return (
        <NavbarContainer>
            <NavbarItems>
                <NavbarItem
                    style={{ paddingLeft: '.5rem' }}
                    onClick={props.toggleMenu}
                >
                    Hamb Icon
                </NavbarItem>
                <div
                    style={{
                        display: 'flex',
                    }}
                >
                    <NavbarItem
                        style={{ paddingLeft: '.5rem' }}
                        onClick={props.closeMenu}
                    >
                        <NavbarLink to='/'>Home</NavbarLink>
                    </NavbarItem>
                    {props.token && (
                        <Fragment>
                            <NavbarItem>
                                <NavbarLink
                                    to='/menu'
                                    onClick={props.closeMenu}
                                >
                                    Menu
                                </NavbarLink>
                            </NavbarItem>
                            <NavbarItem onClick={logout}>Logout</NavbarItem>
                        </Fragment>
                    )}

                    {!props.token && (
                        <Fragment>
                            <NavbarItem>
                                <NavbarLink to='/login'>Sign in</NavbarLink>
                            </NavbarItem>
                            <NavbarItem>
                                <NavbarLink to='/register'>Register</NavbarLink>
                            </NavbarItem>
                        </Fragment>
                    )}
                </div>
            </NavbarItems>
        </NavbarContainer>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(closeSideMenu());
            dispatch({ type: LOGOUT });
        },
        toggleMenu: () => dispatch(toggleSideMenu()),
        closeMenu: () => dispatch(closeSideMenu()),
    };
};

const mapStateToProps = (state) => {
    return {
        token: state.auth.jwtToken,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
