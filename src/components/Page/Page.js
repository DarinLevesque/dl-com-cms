import React from "react";
import PropTypes from "prop-types";

import Article from "../Main/Article";
import PageHeader from "./PageHeader";
import Content from "../Main/Content";
import TypeIt from 'typeit';

const instance = new TypeIt('#replaceStrings', {
  strings: ["This is a great string.", "But here is a better one."],
  speed: 50,
  breakLines: false,
  waitUntilVisible: true
}).go();

const Page = props => {
  const { page } = props;
  const html = (page || {}).html;

  return (
    <Article>
      <PageHeader {...page.frontmatter} />
      <p id="replaceStrings"></p>
      <Content html={html} />
    </Article>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired
};

export default Page;
