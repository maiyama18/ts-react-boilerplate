import * as React from 'react'
import { Header } from './Header';
import { Container } from 'semantic-ui-react';

export const App = () => {
  return (
    <div style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
      <Header />
      <Container>
        hello
      </Container>
    </div>
  )
}