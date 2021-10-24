import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateRecipe from "./Routes/CreateRecipe";
import FoodReci from "./Routes/FoodReci";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import MyProfile from "./Routes/MyProfile";
import Profile from "./Routes/Profile";
import ProfilesList from "./Routes/ProfilesList";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Recipe from "./Routes/Recipe";
import SignUp from "./Routes/SignUp";
import PasswordReset from "./Routes/PasswordReset";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <ProtectedRoute path="/food-reci" component={FoodReci}/>
        <ProtectedRoute path="/recipe/:id" component={Recipe}/>
        <ProtectedRoute path="/create-recipe" component={CreateRecipe}/>
        <ProtectedRoute path="/myprofile" component={MyProfile}/>
        <ProtectedRoute path="/profile/:username" component={Profile}/>
        <ProtectedRoute path="/profiles" component={ProfilesList}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;