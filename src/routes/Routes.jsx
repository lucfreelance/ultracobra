import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Spaces from '../pages/Spaces';
// import NotFound from '../components/NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={<Home />} />
        <Route exact path="/spaces" component={<Spaces />} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;