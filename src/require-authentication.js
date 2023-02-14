import React from 'react';
import CurrentUser from './current-user'
import Login from './login';

export default function RequireAuthentication(WrappedComponent) {
  return function(props) {
    const user = CurrentUser.get();
    if (user) {
      return <WrappedComponent {...props} />;
    }

    return <Login />;
  };
}
