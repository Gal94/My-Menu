import React, { Suspense, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import Navbar from './components/Navbar/Navbar.component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home.component';
import './App.css';
import Profile from './pages/Profile/Profile.component';

const Auth = React.lazy(() =>
    import('./pages/Authenticate/Authenticate.component')
);

function App(props) {
    useEffect(() => {
        const token = localStorage.getItem('MyMenuToken');
        const user = JSON.parse(localStorage.getItem('User'));
        if (!token) {
            return;
        }

        props.setUser(token, user);
    });

    return (
        <div className='App'>
            <ToastContainer
                position='bottom-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Navbar />
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/login' exact>
                    <Suspense fallback={<div></div>}>
                        <Auth />
                    </Suspense>
                </Route>
                <Route path='/register' exact>
                    <Suspense fallback={<div></div>}>
                        <Auth />
                    </Suspense>
                </Route>
                <Route path='/profile'>
                    <Suspense fallback={<div></div>}>
                        <Profile />
                    </Suspense>
                </Route>
                <Redirect to='/' />
            </Switch>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (token, user) =>
            dispatch({ type: 'SET_USER', token: token, user: user }),
    };
};

export default connect(null, mapDispatchToProps)(App);
