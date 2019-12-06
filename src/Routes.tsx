import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthorizedRoute } from "./components/routes";

import Root from "./components/layout/Root";
import Header from "./components/layout/Header";

import { NotFound } from "@developermouse/lifequest-react-core";
import AdminRoutes from "./pages/admin/Routes";

import { AuthCallbackPage } from "./pages/auth/AuthCallbackPage";

const Routes: React.SFC = () => (
  <Root>
    <Header title="LifeQuest" />
    <Switch>
      {/* Auth */}
      <Route exact path="/auth/callback" component={AuthCallbackPage} />
      
      {/* Admin */}
      <AuthorizedRoute authorizedRoles="Admin" path="/" component={AdminRoutes} />

      <Route component={NotFound} />
    </Switch>
  </Root>
);

export default Routes;
