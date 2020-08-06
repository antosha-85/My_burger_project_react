import React, { useState } from "react";
import { connect } from "react-redux";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
// import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  // state = {
  //   showSideDrawer: false,
  // };
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    // this.setState({ showSideDrawer: false });
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    // this.setState((prevState) => {
    //   return { showSideDrawer: !prevState.showSideDrawer };
    // });
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  // render() {
  return (
    <Aux>
      <Toolbar
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        isAuth={props.isAuthenticated}
        closed={sideDrawerClosedHandler}
        open={sideDrawerIsVisible}
      />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
  // }
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
export default connect(mapStateToProps)(Layout);
