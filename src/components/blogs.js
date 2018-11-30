import React from 'react'
import styled from 'styled-components'

const MEDIUM_POST_BASE = 'https://medium.com/@oikawa';
const mediumCDNUrl = `https://cdn-images-1.medium.com/max/320/`

const BlogDiv = styled.div`
`

const BlogUl = styled.ul`
  display: flex;
  margin-left: 0;
`

const BlogLi = styled.li`
  flex: 1 0;
  overflow: hidden;
  margin-right: 8px;
`

const Blogs = ({ posts }) => (
  <BlogDiv>
    <BlogUl>
      {posts.map(post => (
      <BlogLi>
          <article key={post.node.id}>
            <span>{post.node.createdAt}</span>
            <a href={`${MEDIUM_POST_BASE}/${post.node.uniqueSlug}`}>
            <h6>{post.node.title}</h6>
            {
            post.node.virtuals.previewImage.imageId !== '' ? (
              <img
                src={`${mediumCDNUrl}/${post.node.virtuals.previewImage.imageId}`}
                alt={post.node.title}
                height="150px"
              />
            ) : (
              <div/>
            )
            }
            </a>
          </article>
      </BlogLi>
      ))}
    </BlogUl>
  </BlogDiv>
)

export default Blogs
