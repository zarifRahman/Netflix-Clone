import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

// check the user is logged in


// protected routes

export default  function IsUserRedirect({ user, loggedInPath, children, ...rest}) {
  return (
    <Route
      {...rest}
      render={()=>{
        // if user is logged in redirect the user 
        if(!user) {
          return children;
        }
        if(user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath
              }}
            />
          )
        }
        return null;
      }}
    >

    </Route>
  )
}
export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if(user) {
          return children;
        }

        if(!user) {
          return (
            <Redirect 
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          )
        }
        return null;
      }}
    />
  )
}
