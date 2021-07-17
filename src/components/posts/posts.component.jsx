import React from 'react'
import styled from 'styled-components'

import withData from '../with-data'

export const PostsWrapper = styled.div`
  max-width: 80%;
  min-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  background-color: lightblue;
  border-radius: 20px;
  padding: 1rem;
  text-align: center;
`
export const PostsWrapperItem = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 1rem 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  p {
    font-style: italic;
  }
`
const Posts = ({ name, email, data }) => (
  <PostsWrapper>
    <h1>{name}</h1>
    <h2>{email}</h2>
    <p>Posts</p>
    {data.map((post) => {
      const { id, title, body } = post
      return (
        <PostsWrapperItem key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </PostsWrapperItem>
      )
    })}
  </PostsWrapper>
)

export default withData(Posts)
