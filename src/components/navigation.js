import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";

export default (props) => (
  <nav className="navigation">
    <Link to="/people">People</Link>
    <Link to="/publications">Publications</Link>
    <Link to="/blog">Blogs</Link>
 
    <Link to="/contact">Contact</Link>
    <ThemeChanger />
  </nav>
);
