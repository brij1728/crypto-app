import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { WalletPage } from "../pages/WalletPage";

export const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/wallet">
            <WalletPage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
