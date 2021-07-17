import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Posts from './components/posts/posts.component'
import Users from './components/users/users.component'

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    html, body, #root {
        margin: 0 auto;
    }
    body {
        padding: 1rem;
    }
`

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
`

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <GlobalStyles />
        <Posts
          name="Bryon"
          email="bryon@smithauto.us"
          dataSource="https://jsonplaceholder.typicode.com/posts/"
        />
        <Users dataSource="https://jsonplaceholder.typicode.com/users/" />
      </Wrapper>
    )
  }
}
export default App
