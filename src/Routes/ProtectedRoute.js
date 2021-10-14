import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const user = localStorage.getItem("token");
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;