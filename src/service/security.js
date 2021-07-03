import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { userContext } from '../context/userContext';
const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { access } = useContext(userContext);
    return (
        <Route
            {...rest}
            render={props =>
                access ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                            }}
                        />
                    )}
        />
    );
};
export default ProtectedRoute