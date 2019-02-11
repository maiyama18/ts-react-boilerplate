import * as React from 'react';
import { Container, Menu } from 'semantic-ui-react';

export const Header = () => {
  return (
    <Menu attached={true} inverted={true} borderless={true} size={'huge'} color={'orange'}>
      <Container>
        <Menu.Item>title</Menu.Item>
      </Container>
    </Menu>
  );
};
