import React from "react"

const ToC = ({ tableOfContents, currentHeaderUrl }) => {
  if (tableOfContents && tableOfContents.length > 0) {
    return (
      <div className="toc">
        <title>Table of contents</title>
        <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
      </div>
    )
  } else {
    return null
  }
}

export default ToC
