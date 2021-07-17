import React from 'react'
import styled from 'styled-components'

import { PostsWrapper, PostsWrapperItem } from '../posts/posts.component'

import withData from '../with-data'

const UsersWrappper = styled(PostsWrapper)`
  background-color: lightgreen;
`

const Users = ({ data }) => (
  <UsersWrappper>
    <h1>Users List</h1>
    {data.map((user) => {
      const { id, name, email } = user
      return (
        <PostsWrapperItem key={id}>
          <h2>{name}</h2>
          <p>{email}</p>
        </PostsWrapperItem>
      )
    })}
  </UsersWrappper>
)

export default withData(Users)
