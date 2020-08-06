import React, { useEffect, Suspense } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
// import Checkout from "./containers/Checkout/Checkout";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
// import Orders from "./containers/Orders/Orders";
// import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
// import asyncComponent from "./hoc/asyncComponent/asyncComponent";

// const asyncCheckout = asyncComponent(() => {
//   return import("./containers/Checkout/Checkout");
// });
// const asyncOrders = asyncComponent(() => {
//   return import("./containers/Orders/Orders");
// });
// const asyncAuth = asyncComponent(() => {
//   return import("./containers/Auth/Auth");
// });
const Checkout = React.lazy(() => {
  return import("./containers/Checkout/Checkout");
});
const Orders = React.lazy(() => {
  return import("./containers/Orders/Orders");
});
const Auth = React.lazy(() => {
  return import("./containers/Auth/Auth");
});
const App = (props) => {
  // componentDidMount() {
  //   this.props.onTryAutoSignup();
  // }
  useEffect(() => {
    props.onTryAutoSignup();
  }, []);
  let routes = (
    <Switch>
      <Route path="/auth" 
      // component={asyncAuth} 
      render={(()=> <Auth/>)}
      />
      <Route path="/" exact component={BurgerBuilder} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/checkout" render={(()=> <Checkout/>)} />
        <Route path="/orders" render={(()=> <Orders/>)} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" render={(()=> <Auth/>)} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div>
      <Layout><Suspense fallback={<p>Loading...</p>}>{routes}</Suspense></Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
