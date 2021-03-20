import { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import {
    NavbarContainer,
    NavbarItem,
    NavbarItems,
    NavbarLink,
} from './Navbar.styles';
import { LOGOUT } from '../../store/actionTypes';

let listener;

// TODO : Make transparent color only on homepage
// TODO : Add homepage Link

const Navbar = (props) => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        listener = document.addEventListener('scroll', (e) => {
            // get how much have been scrolled from top
            let scrolled = document.scrollingElement.scrollTop;

            // apply styles
            if (scrolled >= 10) {
                if (isTop !== false) {
                    setIsTop(false);
                }
            } else {
                if (isTop !== true) {
                    setIsTop(true);
                }
            }
        });

        // upon unmounting remove listener
        return () => {
            document.removeEventListener('scroll', listener);
        };
    }, [isTop]);

    const logout = () => {
        localStorage.removeItem('MyMenuToken');
        props.onLogout();
    };

    return (
        <NavbarContainer isTransparent={isTop}>
            <NavbarItems isTransparent={isTop}>
                {props.token && (
                    <Fragment>
                        <NavbarItem>
                            <NavbarLink to='/#'>My Profile</NavbarLink>
                        </NavbarItem>
                        <NavbarItem onClick={logout}>Logout</NavbarItem>
                    </Fragment>
                )}

                {!props.token && (
                    <NavbarItem>
                        <NavbarLink to='/login'>Sign in</NavbarLink>
                    </NavbarItem>
                )}
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
