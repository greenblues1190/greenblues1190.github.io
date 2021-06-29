/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title, image }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const keywords = site.siteMetadata.keywords
  const siteUrl = site.siteMetadata.siteUrl
  const defaultImage = site.siteMetadata.defaultImage
  const ogImage = `${siteUrl}/og/${image || defaultImage}`
  const url = `${siteUrl}${pathname}`

  return (
    <Helmet
      htmlAttributes={{
        lang: `ko`,
      }}
      title={title}
      titleTemplate={
        title !== "Home" && defaultTitle ? `%s | ${defaultTitle}` : defaultTitle
      }
      meta={[
        {
          property: `og:url`,
          content: url
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: ogImage,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  title: null,
  description: ``,
  image: null,
  lang: `ko`,
  meta: [],
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        author {
          name
        }
        description
        keywords
        social {
          twitter
        }
        siteUrl
        defaultImage
      }
    }
  }
`
