import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../containers/Home';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';
import AuthWith from '../../containers/AuthWith';
// Professional Leagues 
import PLList from '../../containers/PLList';
import Football from '../../containers/Leagues/professionalLeagues/Football';
import Basketball from '../../containers/Leagues/professionalLeagues/Basketball';
import Handball from '../../containers/Leagues/professionalLeagues/Handball';
import FLeague1 from '../../containers/Leagues/professionalLeagues/football/FLeague1';
import FLeague2 from '../../containers/Leagues/professionalLeagues/football/FLeague2';
import FLeague3 from '../../containers/Leagues/professionalLeagues/football/FLeague3';
import BLeague1 from '../../containers/Leagues/professionalLeagues/basketball/BLeague1';
import BLeague2 from '../../containers/Leagues/professionalLeagues/basketball/BLeague2';
import BLeague3 from '../../containers/Leagues/professionalLeagues/basketball/BLeague3';
import HLeague1 from '../../containers/Leagues/professionalLeagues/handball/HLeague1';
import HLeague2 from '../../containers/Leagues/professionalLeagues/handball/HLeague2';
import HLeague3 from '../../containers/Leagues/professionalLeagues/handball/HLeague3';

// Non Professional Leagues
import NonPLList from '../../containers/NonPLList';
import NFootball from '../../containers/Leagues/nonProfessionalLeagues/Football';
import NBasketball from '../../containers/Leagues/nonProfessionalLeagues/Basketball';
import NHandball from '../../containers/Leagues/nonProfessionalLeagues/Handball';
import NCyclisme from '../../containers/Leagues/nonProfessionalLeagues/Cyclisme';
import NTirants from '../../containers/Leagues/nonProfessionalLeagues/Tirants';
import CreateLeague from '../../containers/Leagues/nonProfessionalLeagues/createleague/CreateLeague';
import JoinPublicLeague from '../../containers/Leagues/nonProfessionalLeagues/joinleague/JoinPublicLeague'
import JoinPrivateLeague from '../../containers/Leagues/nonProfessionalLeagues/joinleague/JoinPrivateLeague';
import SelectOption from '../../containers/SelectOption';
import FavoriteTeam from '../../containers/FavoriteTeam';
import ProdictOutcome from '../../containers/predict/PredictOutcome';
import TermsAndConditions from '../../containers/TermsAndConditions';
import FAQs from '../../containers/FAQs';
import Notifications from '../../containers/Notifications';
import PredictScore from '../../containers/predict/PredictScore';
import Profile from '../../containers/Profile';
import Main from '../../containers/Main';
import MyLeagues from '../../containers/Leagues/nonProfessionalLeagues/createleague/MyLeagues';

function AppRouter() {
    return (
        <Router >
            <Route exact component={Main} path='/' />
            <Route exact component={Home} path='/home' />
            <Route exact component={Login} path='/login' />
            <Route exact component={Signup} path='/signup' />
            <Route exact component={AuthWith} path='/authentication' />
            <Route exact component={FavoriteTeam} path='/favoriteteam' />
            {/* Professional League Routes  */}
            <Route exact component={NonPLList} path='/nonprofessionalleague' />
            <Route exact component={NFootball} path='/nonprofessionalleague/football' />
            <Route exact component={NBasketball} path='/nonprofessionalleague/basketball' />
            <Route exact component={NHandball} path='/nonprofessionalleague/handball' />
            <Route exact component={NCyclisme} path='/nonprofessionalleague/cyclisme' />
            <Route exact component={NTirants} path='/nonprofessionalleague/boeuftirants' />
            <Route exact component={FLeague1} path='/nonprofessionalleague/footballleague1' />
            <Route exact component={FLeague2} path='/nonprofessionalleague/footballleague2' />
            <Route exact component={FLeague3} path='/nonprofessionalleague/footballleague3' />
            <Route exact component={BLeague1} path='/nonprofessionalleague/basketballleague1' />
            <Route exact component={BLeague2} path='/nonprofessionalleague/basketballleague2' />
            <Route exact component={BLeague3} path='/nonprofessionalleague/basketballleague3' />
            <Route exact component={HLeague1} path='/nonprofessionalleague/handballleague1' />
            <Route exact component={HLeague2} path='/nonprofessionalleague/handballleague2' />
            <Route exact component={HLeague3} path='/nonprofessionalleague/handballleague3' />
            <Route exact component={CreateLeague} path='/nonprofessionalleague/createleague' />
            <Route exact component={JoinPrivateLeague} path='/nonprofessionalleague/privateleague' />
            <Route exact component={JoinPublicLeague} path='/nonprofessionalleague/publicleague' />
            <Route exact component={MyLeagues} path='/myleagues' />

            {/* Non Professional Leagues Routes */}
            <Route exact component={PLList} path='/professionalleague' />
            <Route exact component={Football} path='/professionalleague/football' />
            <Route exact component={Basketball} path='/professionalleague/basketball' />
            <Route exact component={Handball} path='/professionalleague/handball' />
            <Route exact component={FLeague1} path='/professionalleague/footballleague1' />
            <Route exact component={FLeague2} path='/professionalleague/footballleague2' />
            <Route exact component={FLeague3} path='/professionalleague/footballleague3' />
            <Route exact component={BLeague1} path='/professionalleague/basketballleague1' />
            <Route exact component={BLeague2} path='/professionalleague/basketballleague2' />
            <Route exact component={BLeague3} path='/professionalleague/basketballleague3' />
            <Route exact component={HLeague1} path='/professionalleague/handballleague1' />
            <Route exact component={HLeague2} path='/professionalleague/handballleague2' />
            <Route exact component={HLeague3} path='/professionalleague/handballleague3' />
            <Route exact component={SelectOption} path='/selectoption' />
            <Route exact component={ProdictOutcome} path='/predictoutcome' />
            <Route exact component={PredictScore} path='/predictscore' />
            <Route exact component={TermsAndConditions} path='/termsandconditions' />
            <Route exact component={FAQs} path='/faqs' />
            <Route exact component={Profile} path='/profile' />
            <Route exact component={Notifications} path='/notifications' />
        </Router>
    );
}

export default AppRouter;