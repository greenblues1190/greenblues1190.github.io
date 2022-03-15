import React from "react"

const ToC = ({ tableOfContents, currentHeaderUrl }) => {
  return (
    tableOfContents?.length > 0 && (
      <div className="toc">
        <title>Table of contents</title>
        <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
      </div>
    )
  )
}

export default ToC
