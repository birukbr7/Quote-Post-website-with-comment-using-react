import { Fragment } from "react";
import clasess from "./Layout.module.css";
import MainNav from "./MainNav";
const Layout = (props) => {
  return (
    <Fragment>
      <MainNav />
      <main className={clasess.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
