import { Fragment } from 'react';
import { connect } from 'react-redux';
import {
    NavbarContainer,
    NavbarItem,
    NavbarItems,
    NavbarLink,
} from './Navbar.styles';
import { LOGOUT } from '../../store/actionTypes';

const Navbar = (props) => {
    const logout = () => {
        localStorage.clear();
        props.onLogout();
    };

    return (
        <NavbarContainer>
            <NavbarItems>
                <NavbarItem style={{ paddingLeft: '.5rem' }}>
                    <NavbarLink to='/'>Home</NavbarLink>
                </NavbarItem>
                <div
                    style={{
                        display: 'flex',
                    }}
                >
                    {props.token && (
                        <Fragment>
                            <NavbarItem>
                                <NavbarLink to='/#'>Menus</NavbarLink>
                            </NavbarItem>
                            <NavbarItem>
                                <NavbarLink to='/#'>Profile</NavbarLink>
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
        onLogout: () => dispatch({ type: LOGOUT }),
    };
};

const mapStateToProps = (state) => {
    return {
        token: state.auth.jwtToken,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
