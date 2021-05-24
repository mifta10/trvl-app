
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import SignUp from './components/SgnUp/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/sign-up">
            <SignUp></SignUp>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
