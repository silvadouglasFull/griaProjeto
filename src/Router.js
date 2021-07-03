import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimationContext } from './context/animationContext.js';
import { StorageContext } from './context/storageContext.js';
import { UserContext } from './context/userContext.js';
import { FormContext } from './context/formContext.js';
import HomePage from './pages/index.js';
import Login from './pages/login.js';
import ProtectedRoute from './service/security';
const Router = () => {
    return (
        <BrowserRouter>
            <StorageContext>
                <AnimationContext>
                    <UserContext>
                        <FormContext>
                            <Switch>
                                <Route path="/login" exact component={Login} />
                                <ProtectedRoute path="/" component={HomePage} />
                            </Switch>
                        </FormContext>
                    </UserContext>
                </AnimationContext>
            </StorageContext>
        </BrowserRouter>
    )
}
export default Router;