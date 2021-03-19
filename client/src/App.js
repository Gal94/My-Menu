import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Spinner from './components/Spinner/Spinner.component';
import Navbar from './components/Navbar/Navbar.component';

import './App.css';

const Home = React.lazy(() => import('./pages/Home/Home.component'));

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Switch>
                <Route path='/' exact>
                    <Suspense fallback={<Spinner />}>
                        <Home />
                    </Suspense>
                </Route>
                <Redirect to='/' />
            </Switch>
        </div>
    );
}

export default App;
