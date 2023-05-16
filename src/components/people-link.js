import React from "react";
import { Link } from "gatsby";

const PeopleLink = ({ data }) => (
  <article className="card ">
    <Link to={data.frontmatter.path}>
      {!!data.frontmatter.thumbnail && (
        <img
          className="people-avatar"
          src={data.frontmatter.thumbnail}
          alt={data.frontmatter.title + "- Featured Shot"}
        />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={data.frontmatter.path} className="post-link">
          {data.frontmatter.title}
        </Link>
      </h2>
    </header>
  </article>
);
export default PeopleLink;
