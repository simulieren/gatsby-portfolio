import React, { Component, Fragment } from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'
import { Text } from 'rebass'

import { StyledLinkText } from '../Typography'

const PostTags = props => {
  let { tags } = props
  const isTagsArray = Array.isArray(tags)
  if (!isTagsArray) tags = [tags]

  return (
    <span className="post-tag-container">
      {tags &&
        tags.map(tag => (
          <Fragment key={tag}>
            {" " + "·" + " " + tag}
          </Fragment>
        ))}
    </span>
  )
}

export default PostTags
