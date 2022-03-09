
import './App.scss';
import Main from './containers/main/index'
import SignUp from './containers/signup/index';
import Login from './containers/login/index'
import ForgotPassword from './containers/forgot.password/index';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './containers/dashboard/index'
import ForgotPasswordRecovery from './containers/submit.recovery.code/index'
import { ThemeProvider } from '@material-ui/core'
import { jubileeTheme } from './theme.configuration/pheonix.material.theme'
import CreateApplet from './containers/create.applet/index'
import BuildApplet from './containers/build.applet/index'
import Settings from './containers/settings/index'
import Notifications from './containers/notifications/index'
// import Builder from './containers/builder/index'
import DashboardMain from './containers/dashboard.main/index'
import Create from './containers/create/index'
import LandingPage from './containers/landing.page/landing.page'


function App() {
  return (
    <div className="global">
      <ThemeProvider theme={jubileeTheme} >
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/landing-page" component={LandingPage} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/forgot-password-recovery" component={ForgotPasswordRecovery} />
          <Main>
            <Route exact path="/applets" component={Dashboard} />
            <Route exact path="/createApplet" component={CreateApplet} />
            <Route exact path="/builder/:appletId" component={BuildApplet} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/" component={DashboardMain} />
            <Route exact path="/home" component={DashboardMain} />
            <Route exact path="/createApplet/:appletId" component={CreateApplet} />

          </Main>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
