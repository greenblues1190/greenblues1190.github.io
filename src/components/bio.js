/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
            instagram
            soundcloud
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <div>
          {author?.summary || null} <strong>{author.name}</strong>입니다.
          <div className="bio-social-link">
            <a href={`https://github.com/${social?.github || ``}`}>
              <img src="/social_logo/GitHub-Mark-32px.png" alt="github" />
            </a>
            {/* · */}
            <a href={`https://instagram.com/${social?.instagram || ``}`}>
              <img src="/social_logo/Instagram_Glyph_Gradient_RGB.png" alt="instagram" />
            </a>
            {/* · */}
            <a href={`https://soundcloud.com/${social?.soundcloud || ``}`}>
              <img src="/social_logo/soundcloud_orange_transparent_32.png" alt="soundcloud" />
            </a>
            {/* · */}
            <a href={`https://www.notion.so/78f84d8375a547e69b5a7e7c2ed3bc93`}>
              portfolio
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Bio
