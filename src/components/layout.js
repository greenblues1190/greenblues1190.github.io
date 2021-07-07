import React from "react"
import { useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      icon: file(absolutePath: { regex: "/icon.png/" }) {
        childImageSharp {
          fixed(width: 64, height: 64, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const icon = data?.icon?.childImageSharp?.fixed
  const blogTitle = data?.site.siteMetadata?.title
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const header = (
    <h1 className="main-heading">
      <Link to="/" className="heading-link">
        {icon && (
          <Image
            fixed={icon}
            alt={blogTitle || `icon`}
            className="header-icon"
            imgStyle={{
              // width: `100px`,
              // height: `100px`,
              borderRadius: `50%`,
            }}
          />
        )}
        {title}
      </Link>
    </h1>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
