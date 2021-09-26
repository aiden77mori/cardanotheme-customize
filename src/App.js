import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './views/layouts/Navbar';
import Footer from './views/layouts/Footer';

import Home from './views/Home';
import Home1 from './views/Home1';
import Home2 from './views/Home2';

import Explore from './views/Explore';
import Explore2 from './views/Explore2';
import Explore3 from './views/Explore3';
import Item from './views/Item';
import Item2 from './views/Item2';

import Activity from './views/Activity';

import Unitok from './views/community/Unitok';
import HelpCenter from './views/community/HelpCenter';
import Contacts from './views/community/Contacts';
import Blog1 from './views/community/blog/Blog1';
import Blog2 from './views/community/blog/Blog2';
import Article from './views/community/blog/Article';

import Authors from './views/pages/Authors';
import Author from './views/pages/Author';
import Collection from './views/pages/Collection';
import Create from './views/pages/Create';

import SignIn from './views/others/SignIn';
import SignUp from './views/others/SignUp';
import NotFound from './views/others/NotFound';
import PrivacyPolicy from './views/others/PrivacyPolicy';
import ForgotPass from './views/others/ForgotPass';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home1" component={Home1} />
        <Route exact path="/home2" component={Home2} />

        <Route exact path="/explore" component={Explore} />
        <Route exact path="/explore2" component={Explore2} />
        <Route exact path="/explore3" component={Explore3} />

        <Route exact path="/item" component={Item} />
        <Route exact path="/item2" component={Item2} />

        <Route exact path="/activity" component={Activity} />

        <Route exact path="/token" component={Unitok} />
        <Route exact path="/faq" component={HelpCenter} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/blog1" component={Blog1} />
        <Route exact path="/blog2" component={Blog2} />
        <Route exact path="/article" component={Article} />

        <Route exact path="/authors" component={Authors} />
        <Route exact path="/author" component={Author} />
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/create" component={Create} />

        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forgotpass" component={ForgotPass} />
        <Route exact path="/notfound" component={NotFound} />
        <Route exact path="/privacypolicy" component={PrivacyPolicy} />

        <Route component={NotFound} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
