import { Route, Switch } from 'react-router-dom';
import AdministrationPage from '../AdministrationPage/AdministrationPage';
import NotFoundPage from '../DefaultPage/404/NotFoundPage';
import EntitiesPage from '../EntitiesPage/EntitiesPage';
import MainPage from '../MainPage/MainPage';
import PeoplePage from '../PeoplePage/PeoplePage';
import PrivacyPage from '../User/PrivacyPage';
import ProfilePage from '../User/ProfilePage';
import SettingsPage from '../User/SettingsPage';
import WorkspacePage from '../WorkspacePage/WorkspacePage';

const AppRouter = () => (
    <main>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/administration" component={AdministrationPage} />
            <Route exact path="/entities" component={EntitiesPage} />
            <Route exact path="/people" component={PeoplePage} />
            <Route exact path="/privacy" component={PrivacyPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/settings" component={SettingsPage} />
            <Route exact path="/workspace/:id" component={WorkspacePage} />
            <Route component={NotFoundPage} />
        </Switch>
    </main>
);

export default AppRouter;