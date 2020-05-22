import React from "react";
import Aux from "../../hoc/Aux";

const Layout = (props) => (
  <Aux>
    <div>ToolBar, SideBar, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default Layout;