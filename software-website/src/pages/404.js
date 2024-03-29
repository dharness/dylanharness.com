import React from "react";
import { Link } from "gatsby";

import Layout from "@rocketseat/gatsby-theme-docs/src/components/Layout";
import Seo from "@rocketseat/gatsby-theme-docs/src/components/SEO";

export default function NotFound() {
  console.log("Not found!");
  return (
    <Layout title="Page not found!">
      <Seo title="404: Not found" />
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        If you&#39;d like to go back to homepage, <Link to="/">click here</Link>
        .
      </p>
    </Layout>
  );
}
