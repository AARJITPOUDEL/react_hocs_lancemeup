import React from 'react';
import CurrentUser from './current-user'

export default function Authorization(allowedRoles) {
  return function(WrappedComponent) {
    return function(props) {
      const { role } = CurrentUser.get();

      if (allowedRoles.includes(role)) {
        return <WrappedComponent {...props} />;
      }

      return <h1>404! Page not found!</h1>;
    };
  };
}
