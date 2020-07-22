import React from 'react'
import { Link } from 'gatsby'

// Components
import { DefaultLayout } from '@Component/DefaultLayout'
import { SEO } from '@Component/Seo'

// Configs
import { PagesSummaryEnum } from '@Config/pagesSummary'

const Blog: React.FC = () => (
  <DefaultLayout page={PagesSummaryEnum.BLOG_PAGE}>
    <SEO title="Blog page" />
    <h1>BLOG: Under development</h1>
    <p>This page will be list all posts created inside "_posts" dir</p>
    <Link to="/blog/post-example/">Go to post example</Link>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </DefaultLayout>
)

export default Blog
