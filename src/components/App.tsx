import * as React from 'react'
import { Header } from './Header';
import { Container } from 'semantic-ui-react';

export const App = () => {
  return (
    <div>
      <Header />
      <Container>
        hello
      </Container>
    </div>
  )
}