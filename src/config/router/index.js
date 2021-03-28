import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../containers/Home';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';
import AuthWith from '../../containers/AuthWith';
import SelectLeague from '../../containers/SelectLeague';
import PLList from '../../containers/PLList';
import NonPLList from '../../containers/NonPLList';
import Football from '../../containers/Leagues/Football';
import Basketball from '../../containers/Leagues/Basketball';
import Handball from '../../containers/Leagues/Handball';
import FLeague1 from '../../containers/Leagues/football/FLeague1';
import FLeague2 from '../../containers/Leagues/football/FLeague2';
import FLeague3 from '../../containers/Leagues/football/FLeague3';
import BLeague1 from '../../containers/Leagues/basketball/BLeague1';
import BLeague2 from '../../containers/Leagues/basketball/BLeague2';
import BLeague3 from '../../containers/Leagues/basketball/BLeague3';
import HLeague1 from '../../containers/Leagues/handball/HLeague1';
import HLeague2 from '../../containers/Leagues/handball/HLeague2';
import HLeague3 from '../../containers/Leagues/handball/HLeague3';
import SelectOption from "../../containers/SelectOption";

function AppRouter() {
    return (
        <Router >
            <Route exact component={Home} path='/' />
            <Route exact component={Login} path='/login' />
            <Route exact component={Signup} path='/signup' />
            <Route exact component={AuthWith} path='/authentication' />
            <Route exact component={SelectLeague} path='/selectleague' />
            <Route exact component={PLList} path='/professionalleague' />
            <Route exact component={NonPLList} path='/nonprofessionalleague' />
            <Route exact component={Football} path='/football' />
            <Route exact component={Basketball} path='/basketball' />
            <Route exact component={Handball} path='/handball' />
            <Route exact component={FLeague1} path='/footballleague1' />
            <Route exact component={FLeague2} path='/footballleague2' />
            <Route exact component={FLeague3} path='/footballleague3' />
            <Route exact component={BLeague1} path='/basketballleague1' />
            <Route exact component={BLeague2} path='/basketballleague2' />
            <Route exact component={BLeague3} path='/basketballleague3' />
            <Route exact component={HLeague1} path='/handballleague1' />
            <Route exact component={HLeague2} path='/handballleague2' />
            <Route exact component={HLeague3} path='/handballleague3' />
            <Route exact component={SelectOption} path='/selectoption' />
        </Router>
    );
}

export default AppRouter;