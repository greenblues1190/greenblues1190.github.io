import React, { createRef, useEffect } from "react"

const CommentBox = ({ repo }) => {
  const containerRef = createRef()

  useEffect(() => {
    const utterances = document.createElement("script")
    const attributes = {
      src: "https://utteranc.es/client.js",
      repo,
      "issue-term": "pathname",
      theme: "github-light",
      crossorigin: "anonymous",
      async: "true",
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    containerRef.current.appendChild(utterances)
  }, [repo])

  return <div id="comment" ref={containerRef} />
}

export default CommentBox
