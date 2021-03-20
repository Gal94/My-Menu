import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Spinner from './components/Spinner/Spinner.component';
import Navbar from './components/Navbar/Navbar.component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home.component';
import './App.css';

const Auth = React.lazy(() =>
    import('./pages/Authenticate/Authenticate.component')
);

function App() {
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
                <Route path='/auth' exact>
                    <Suspense fallback={<div></div>}>
                        <Auth />
                    </Suspense>
                </Route>
                <Redirect to='/' />
            </Switch>
        </div>
    );
}

export default App;
