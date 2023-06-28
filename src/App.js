import React from "react";
import { Switch, Route } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuotesDetails from "./pages/QuoteDetails";
import NewQuotes from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/Not-Found";
const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuotesDetails />
        </Route>
        <Route path="/new-quotes">
          <NewQuotes />
        </Route>
        <Route path="/">
          <AllQuotes />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
